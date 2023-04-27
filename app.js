const express=require('express');
const app=express();
const router_article=require('./article/router')


//CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With, content,Accept,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH,OPTIONS');
    next();
})

/* static folder */
app.use(express.static("assets"))
/* url for all article's service */
app.use('/article',router_article);

module.exports=app;