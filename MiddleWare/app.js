 
/*---------code-1-----------*/
var express=require('express');
var app=express();
app.use(function(req,res,next){
    console.log('middeleware-1');
    next();
});
app.use(function(req,res,next){
    console.log('middeleware-2');
    next();
});
app.get('/',function(req,res){
	   console.log('request is handled');
	   res.send('ok');
}).listen(9001,function(){
	 console.log('server is up at 9001');
})

 /*
  output-1
   middeleware-1
   middeleware-2
   request is handled
*/




/*---------code-2-----------*/
var express=require('express');
var app=express();
app.use('/',function(req,res,next){
    console.log('middeleware-1');        //partial match
    next();
});
app.use('/',function(req,res,next){             //partial match
    console.log('middeleware-2');
    next();
    
});
app.get('/',function(req,res){              //exact match
	   console.log('request is handled');
	   res.write('request handled');
	   res.end();
}).listen(9001,function(){
	 console.log('server is up at 9001');
})


 /*
  output-1
   middeleware-1
   middeleware-2 
   request is handled
*/









/*---------code-3-----------*/
var express=require('express');
var app=express();
app.use('/home',function(req,res,next){
    console.log('middeleware-1');        //partial match
    next();
});
app.use('/home',function(req,res,next){             //partial match
    console.log('middeleware-2');
    next();
    
});
app.get('/home',function(req,res){              //exact match
	   console.log('request is handled');
	   res.write('request handled');
	   res.end();
}).listen(9001,function(){
	 console.log('server is up at 9001');
});

 //hit:/home
 /*
  output-1
  middeleware-1
  middeleware-2
  request is handled
*/

/*---------Error Handling------Code-4-------*/
var express=require('express');
var app=express();
//app.use(express.static('public'));
app.use('/',function(req,res,next){
    console.log('middleware-1'); 
    if(req.url=='/'){
    	  throw new Error('click here <a href="http://localhost:9001/home">home</a>');
    }     
    next();
});

app.use('/',function(err,req,res,next){            
    console.log('middleware-2');
    res.send(err.message);   
});
app.get('/home',function(req,res){
	console.log('get')
     res.sendFile(__dirname+'/public'+'/home.html');             
}).listen(9001,function(){
	 console.log('server is Up at 9001');
});



