const express =require('express')
const router=require('./config /router')
const app =express()
app.use(express.static('public'))
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(router)
var moment = require('moment'); 
moment().format(); 
require('./config /mongoose')

app.listen(4000)