const express = require('express') //express 모듈 가져오기
const app = express() //함수화 시켜 app 생성
const port = 5000 //포트번호

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sung029:eotjddl0@cluster0.aw8d2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})