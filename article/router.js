const express=require('express');
const router=express.Router();
const articleService=require('./article.service');

/* middleware */
router.use('/json',(req,res,next)=>{
    res.json({message:"this is router for article"});
    next();
})

/* download image of article */
router.use('/img/download/:id',(req,res)=>{
    articleService.downloadImage(req,res);
 })

/* send image of article */
router.use('/img/:id',(req,res)=>{
   articleService.sendImage(req,res);
})

/* send attribut of article like price or name */
router.use('/attr/:id',(req,res)=>{
    articleService.sendAttribut(req,res);
 })

 /* post test*/
router.post('/post',express.json(),(req,res)=>{
    articleService.post(req,res);
 })

module.exports=router;