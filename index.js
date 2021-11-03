var express = require('express');
var app = express ();
var multer = require('multer'); 

app.set('view engine','ejs');
app.set('views','./views')
app.listen(3000, function(){
    console.log('connect thanh cong');

})   
var storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./upload')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
        // cb(null, "mmmbbb.jpg")
    }
})
var upload = multer({storage: storage});

app.post('/upload',upload.single("file1"),function(req,res){
    console.log(req.file);
    res.send("UPLOAD FILE THANH CONG");

})

app.get('/',function(req,res){
    res.render('form')
})



