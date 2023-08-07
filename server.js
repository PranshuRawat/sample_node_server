const http=require('http')
const port=3000


const server =http.createServer(function(req,res){
 res.writeHead(200, {"Content-Type": "text/html"});
 res.write("<h1>Hello world, This is Sample </h1>");
 res.end();
})

server.listen(port,function(error){
if(error){
    console.log('Something went wrong',error)
}
else{
    console.log('Server is listening on port'+port)
}
})