var express=require('express')

var app=express()

app.get('/',function(req,res){
    res.send("Welcome to main page")
});

app.get('/about',function(req,res){
    res.send("Welcome to about page")
});

app.post('/',function(req,res){
    res.send("Hiiiii");
})

app.listen(3000)