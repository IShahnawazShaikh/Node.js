var http=require('http');
var fs=require('fs');
http.createServer(function(request,response){
    var MIME='text/html';
    var fileHit='';
     var Url=request.url;
    // response.write(Url);
     switch(Url)
     {
     	case '/home': fileHit='index.html';
     	           break;
     	case '/': fileHit='index.html';
     	            break;
     	case '/about':fileHit='about.html';
     	           break; 
     	case '/client':fileHit='client.html';
     	           break;                     
     	case '/style.css':fileHit="style.css";
     					console.log('Hello')
     	                 MIME='text/css';

     	                 break;                                          
     }
 fs.readFile(__dirname+'/public/'+fileHit,function(error,data){
        if(error){
        	 response.writeHead(404,'error');
        	 response.write('error');

        }
        else{
            response.writeHead(200,'success',{'Content-Type':MIME});
        	response.write(data);
        	console.log(data);
        }
   		response.end();        	
   });
}).listen(9001,function(){
	console.log('server is running');
});