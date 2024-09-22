const express=require('express');
const path=require('path');
const app=express();
const student=require('./routes/student');
const connection=require('./connection');
connection();
// app.use(express.json());
app.use(student);
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running on 3000");
    }
})