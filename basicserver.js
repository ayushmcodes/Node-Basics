const http=require('http')

function datacontrol(req,res){
    res.write("<h1>I am a header</h1>")
}

http.createServer((req,res)=>{
    datacontrol(req,res);
}).listen(3000);