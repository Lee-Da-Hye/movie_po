const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logEvents');
//const router = require('./route/router.js')

app.set('PORT', process.env.PORT || 3000);

//const PORT =  3000;
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/' , (req, res)=>{  // 맨처음 컴 켜질경우   
  res.sendFile( path.join(__dirname, 'views', 'index.html'));
  // const url ='https://jsonplaceholder.typicode.com/users';
})
app.get('/index' , (req, res)=>{ 
  res.sendFile( path.join(__dirname, 'views', 'index.html'));
  // const url ='https://jsonplaceholder.typicode.com/users';
})


app.use('/', require('./routes/router_controll')); 
app.use('/subdir', require('./routes/subdir')); 
// route 수정 
app.use(express.static( path.join(__dirname, 'public')));
app.use(express.static( path.join(__dirname, 'data'))); 
app.use(express.static( path.join(__dirname, 'subdir')));

 
app.listen(app.get('PORT'), ()=>{
    console.log( `${app.get('PORT')} start Sever`);
})

app.get('/info' , (req, res)=>{ 
  res.sendFile( path.join(__dirname, 'views', 'info.html'));
})
app.get('/movie' , (req, res)=>{ 
  res.sendFile( path.join(__dirname, 'views', 'movie.html'));
})
app.get('/mypage' , (req, res)=>{ 
  res.sendFile( path.join(__dirname, 'views', 'mypage.html'));
})

// database
let users = [
    { id:1,  username  : 'kim',  userpwd  : 30  }, 
    { id:2,  username  : 'park',  userpwd  : 33  }, 
    { id:3,  username  : 'you',  userpwd  : 20  }, 
    { id:4,  username  : 'lee',  userpwd  : 23  }, 
    { id:5,  username  : 'lim',  userpwd  : 19  }, 
  ]
  app.get('/join', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views' , 'join.html')) ;
  })
  app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views' , 'login.html')) ;
  })  
  app.post('/login', (req, res)=>{
    const {username , userpwd}= req.body;
    console.log( `요청 url : ${req.url}  ${req.method} ${username}` );
    // javascript 로 배열(db)에 있는 데이터를 찾아서 출력( db에서 찾으려면 sql 필요) 
    const findUser = users.find( user => user.username.toString() === username && user.userpwd ===  parseInt(userpwd)); // 엄격한 검사 
    let confirmData = {};
    if( findUser)  confirmData = { success : true, data: findUser }
    if( !findUser)  confirmData = { success : false  }
    res.json(confirmData) ;
  })  
// localhost:3000/user : 단수 user
app.get('/user', (req, res)=>{
    console.log( `요청 url : ${req.url}` );
    res.json({ 
      username : 'kim',
      userpwd : 30 
    })  
  })
  
  // localhost:3000/users
  app.get('/users', (req, res)=>{
    console.log( `요청 url : ${req.url}` );
    res.json(users) ;
  })

    
  app.post('/users', (req, res)=>{
      console.log(`request : ${req.url}`);
      const { username, userpwd } = req.body; 
  
      users.push({
            username:username,
            userpwd:userpwd      
      })
  
      console.log( users );
      // res.send(`정상적으로 생성됨 이름 : ${username} , 나이 : ${ userpwd}`);
      res.json(users);
  })
  
  // localhost:3000/users/id :  params를 통해서 전송
  // 네이버에서 검색하면 서버가 주소를  localhost:3000/search/검색어 : params는 검색어
  // https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%84%A4%EC%9D%B4%EB%B2%84%EB%A1%9C%EA%B3%A0
  // localhost:3000/users/3
  app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    console.log( `요청 url : ${req.url}  ${id}` );
    // javascript 로 배열(db)에 있는 데이터를 찾아서 출력( db에서 찾으려면 sql 필요) 
    const findUser = users.find( user => user.id.toString() === id); // 엄격한 검사 
    res.send(findUser) ;
  })
  
   
  app.delete('/users/:id', (req, res)=>{
    const id = req.params.id;
    console.log( `요청 url : ${req.url}  ${id}` );
  
    users = users.filter( user => user.id.toString() !== id );
    // 같은 데이터를 찾아서 직접 지우기도 하지만 : sql 
    // 같지 않은 데이터를 찾아서 다시 배열에 저장 
     
    res.send(users) ;
    // 서버를 on/off하면 다시 5개 데이터가 존재함 
  })
  
  // update
  app.put('/users/:id', (req, res)=>{
    const id = req.params.id;
    const { username, userpwd } = req.body; 
  
    console.log( `요청 url : ${req.url}  ${id}` );
    // 수정할 모양 만들기 : { id:4,  username  : 'lee',  userpwd  : 23  }, 
  
    users = users.map( user => {
        if( user.id.toString() === id ){
          return {
              id , 
              username , 
              userpwd 
          }
        }
  
        return user; 
    });
     
    res.json(users) ;
    // 서버를 on/off하면 다시 5개 데이터가 존재함 
  })

  