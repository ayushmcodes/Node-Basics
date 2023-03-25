var express=require('express')

var router=express.Router();

router.get('/',function(req,res){
    console.log(req)
    res.send("GET route")
})

router.get('/about',function(req,res){
    console.log(req)
    res.send("GET route about")
})

router.post('/',function(req,res){
    res.send('POST Route');
})



module.exports=router
