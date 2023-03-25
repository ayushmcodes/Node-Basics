var express=require('express')
var app=express()

app.get('/:id',function(req,res){
    res.send("The ID you specified is "+req.params.id);
});

app.get('/:name/:id',function(req,res){
    res.send("Name is "+req.params.name+" and ID is "+req.params.id);
});

app.listen(3000);