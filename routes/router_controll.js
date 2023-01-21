const express = require('express');
const app = express();
const path = require('path');
// route 추가 
const router = express.Router();
const fs = require('fs');
const {
    getAllUsers,
    getList,
    getfilterUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/controller');
 


 
 router.get('/' , getAllUsers)
 router.get('/list' , getList)
 
 // http://localhost:3000/filter/test3확인
 router.get('/filter/:userid' , getfilterUsers)
 router.post('/create' , createUser)
//  router.post('/login' , (req, res)=>{
//      // 로그인할 데이타를 찾아서 
//      // 아이디가 있으면 로그인 없으면 에러
//      // const filterUrl = `https://jsonplaceholder.typicode.com/users/${userid}`;
//      res.send('목록 뿌리기');
//  })
 router.post('/update' , updateUser)
 
 router.post('/delete' , deleteUser)

 module.exports = router;