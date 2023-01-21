const path = require('path');
const fs = require('fs');
// 데이터가 없어도 있고 없고 처리를 할 수 있음 
const users = JSON.parse(fs.readFileSync('./model/data.json', 'utf-8'));
console.log( users );

const setUser = user =>{ 
    users.push(user); // 단순히 push하면 뒤에 붙고
    //users = [ user, ...users] ; // 앞에 넣기 
 }
 const writeUser = users =>{ 
     // function에 문제인듯 
     fs.writeFile('./model/data.json',  users , (err)=>{
         if(err) console.log(err);
     })
 }

 const getAllUsers = (req, res)=>{  // 맨처음 컴 켜질경우   
     
     res.sendFile( path.join(__dirname, '..', 'views', 'index04.html')); 
 }

 const getList = (req, res)=>{
    let returnData = {}
    console.log( users )
    if( users.length > 0 ) {
        returnData = { "success" : true,  "message": `정상처리`, data : users }
    } else {
        returnData = { "success" : false,  "message": `데이터 없음`}
    }
    res.json(returnData);
}

const getfilterUsers = (req, res)=>{
    console.log('tt', users  );
    console.log(req.params.userid );

    //const filterData = users.filter( user => user.userid === req.params.userid );
    const filterData = users.find( user => user.userid === req.params.userid ); 
    let comData = {}
    if (!filterData) {
        comData = { "success" : false,  "message": ` ${req.body.userid} 검색오류`  } ;
    } else {
        comData =  { "success" : true,  "message": ` ${req.body.userid} 정상처리` , data : filterData } ;
       
    }
    res.json( comData ); 
}

const createUser = (req, res)=>{
    // 중복된 데이터 있으면 에러 
    // 없으면 생성 
    console.log( req.body );
    let user = users.find(user => user.userid === req.body.userid);
    if( user ){
        return res.status(400).json({ "success" : false,  "message": `user userid ${req.body.userid} 중복됩니다` });
    }
    const id = users.length > 0 ? users.length + 1 : 1 ; // 2개 + 1 ; 번호 중복 문제 발생 
    // const id  = users.length ? users[users.length - 1].id + 1 : 1;
    // 차례로 아래로 싸일때 
    // const id  = users.length ? users[0].id + 1 : 1;
    // 자동 생성 시스템
    // const user = req.body; 
    // // { name: 'test', username: 'test', email: 'tet', phone: 'test' }
    // user.id = id; // 아래 들어가는거 수정
    // {id:'3',  name: 'test', username: 'test', email: 'tet', phone: 'test' }
    
    user = { id,  ...req.body}
    setUser( user );
    const comData =  { "success" : true,  "message": ` ${req.body.userid} 수정되었습니다.` , data : [...users] } ;
    writeUser( JSON.stringify(users , null, " ") ); 
     
    res.send(comData); // 리턴 주의 
}

const updateUser = (req, res)=>{
    // 수정할 데이타를 찾아서 
    // 찾은 데이터가 있으면 수정 없으면 에러
 
    console.log( req.body.userid );
    const user = users.find(user => user.userid === req.body.userid);
    console.log( "tt : ", !user )
    if(!user ){
        //return res.status(400).json({ "message": `user userid ${req.body.userid} not found` });
        return res.status(400).json({ "success" : false,  "message": `user userid ${req.body.userid} not found` });
    }

    // 찾은 데이터를 모두 수정한 후 
    if( req.body.username )  user.username =  req.body.username;
    if( req.body.useremail )  user.useremail =  req.body.useremail;
    if( req.body.userphone )  user.userphone =  req.body.userphone;

    // 수정할 데이터를  지우고 다시 삽입
    const modifyArray = users.filter(user => user.userid !== req.body.userid);
     
    //writeUser( JSON.stringify([...filteredArray]));
    writeUser( JSON.stringify([user, ...modifyArray] , null, " ") );
    
    const comData =  { "success" : true,  "message": ` ${req.body.userid} 수정되었습니다.` , data : [...modifyArray] } ;
    //console.log(comData.success)
    //배열,객체일지 잘 사용할 것 
    res.json(comData); 
}

const deleteUser =  (req, res)=>{
    // 삭제할 데이타를 찾아서 
    // 찾은 데이터가 있으면 삭제 없으면 에러
    console.log( req.body.userid );
    const user = users.find(user => user.userid === req.body.userid);
    if (!user) {
        //return res.status(400).json({ "message": `user userid ${req.body.userid} not found` });
        return res.status(400).json({ "success" : false,  "message": `user userid ${req.body.userid} not found` });
    }
    const filteredArray = users.filter(user => user.userid !== req.body.userid);
    //writeUser( JSON.stringify([...filteredArray]));
    writeUser( JSON.stringify(filteredArray , null, " ") );
    res.json({ "success" : true,  "message": ` ${req.body.userid} 삭제되었습니다.`, data: filteredArray }); 
}

module.exports = {
    setUser,
    writeUser,
    getAllUsers,
    getList,
    getfilterUsers,
    createUser,
    updateUser,
    deleteUser
}