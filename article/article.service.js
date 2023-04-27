const constante=require('./constante');

const path= require('path');

const attribut=constante.attribut;

exports.sendImage=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../assets/img/article/"+req.params.id+".png"))
}
exports.downloadImage=(req,res)=>{
    // console.log(req.params.id)
    res.download(path.join(__dirname+"/../assets/img/article/"+req.params.id+".png"))
}

exports.sendAttribut=(req,res)=>{
    res.json(attribut[req.params.id-1])
}

exports.post=(req,res)=>{
    console.log(req.body);
    res.end();
}