var express=require('express');
var app=express();
app.get(express.static('public'));

app.use(function(req,res,next){
	  var time = new Date().getHours();       //getMinutes();   getSeconds();
	  console.log('current time:   '+time);
	  if(time>12 && time<=18){
        res.sendFile(__dirname+'/public/register.html');
	  }
	  else if(time>18 && time<=24){
	  	 throw new Error('Registration Closed');
	  	 
	  	 next();
	   }
	  else if(time>0 && time<=12) {
	  	 console.log('yes');
	  	 res.sendFile(__dirname+'/public/result.html');
	  }

});
app.use('/',function(err,req,res,next){
	res.send(err.message);
})
app.get('/',function(req,res){
	  console.log('request is handled');
	  res.end();

}).listen(9001,function(){
	 console.log('server is up at 9001');
});