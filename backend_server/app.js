//const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let count = 0;
const max = 10; //최대 예약 가능 객실수
const reservations = [
  {
    id: count++,
    name: '홍길동',
    phone: '01012345678',
    account: {
      bank: '광주은행',
      number: '1000-2000-101-3',
      owner: '홍길동'
    },
    datetime: '2024-05-25T09:00:00.000Z',
    total: 4

  }
]

app.get('/search', (req, res) => {
  res.send('<h1>Hello Search World!</h1>')
})
app.post('/signin', (req, res) => {
  const {user_id, user_pass} = req.body; //id, pw를 두가지 변수에 구조분해할당
  if (user_id === 'snlsuper') { //실제로는 DB에서 전체 회원중 일치하는 ID를 찾아서
    if (user_pass === 'tkfkd15115') { //비밀번호까지 일치하는지 비교해서
      console.log('관리자 로그인!'); //맞다면, 관리자 로그인을 알리고, 클라이언트에 로그인 계정명을
      res.json({
        success: 'ok',
        message: '로그인 성공'
      })
    }
  } else {
    res.json({
      success: 'fail',
      message: '로그인 실패'
    })
  }
  return res.redirect('/'); //로그인 성공하면 메인페이지 이동
})
app.post('create', (req, res) => {
  //DB 연결: Oracle, MySQL, MognDB, Firebase, ..etc
  //const dbconn = mysql.connect('localhost:3000/users');

  //console.log(req); //request의 줄임말, req(요청)
  //const sql = 'INSERT INTO users (id, pw, name, phone) values (${user_id}, (${user_pw}, (${user_name}, (${user_phone});'
  
  const {user_id, user_pass} = req.body; //id, pw를 두가지 변수에 구조분해할당
  if (user_id === 'snlsuper') { //실제로는 DB에서 전체 회원중 일치하는 ID를 찾아서
    if (user_pass === 'tkfkd15115') { //비밀번호까지 일치하는지 비교해서
      console.log('관리자 로그인!'); //맞다면, 관리자 로그인을 알리고, 클라이언트에 로그인 계정명을
      res.json({
        success: 'ok',
        message: '회원가입 성공'
      })
    }
  } else {
    res.json({
      success: 'fail',
      message: '로그인 실패'
    })
  }
  return res.redirect('/'); //로그인 성공하면 메인페이지 이동
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})