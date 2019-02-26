var http=require('http');
http.createServer(function(request,response){
     response.write("Getting Started with Node.js");
     response.write(request.url);
       response.end();
}).listen(9001,function(){
	 console.log("server is running at 9001");
});
