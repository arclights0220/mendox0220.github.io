const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('main'));


app.get('/', (req, res, next) => {
    console.log("미들웨어")
    next();
}, (req, res, error)=>{
    res.sendFile(path.join(__dirname, './main/intro.html'))
    console.log(error)
})

app.listen(8080, ()=> {
    console.log("server on")
})