/*----------------------------How to Set Cookie------------------------*/
/*
 var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.cookie('name','shahnawaz');
    res.send('cookie is set');
}).listen(9001,function(){
	 console.log('server is up at port-9001');
})
*/

/*
       --------------Set Cookie for specified time------------------

var express=require('express');
var app=express();
app.get('/',function(req,res){
     res.cookie('name','shahnawaz',{ maxAge: 9000,httpOnly:true});      //cookiee is only accessde by the webserver
    res.send('cookie is set for specified time');
}).listen(9001,function(){
	 console.log('server is up at port-9001');
})
*/

/*
  --------------Array and Json as Cookie value-----------------

var express=require('express');
var app=express();
app.get('/',function(req,res){
     res.cookie('name1',['A','B','C','D']);      
     res.cookie('name2',{courses:['Java','Js','C','Cpp']});      
     res.cookie('name3',{courses:{value1:'shahnawaz',value2:'arif'}});      
     res.send('cookie is set with values as Array and Json ');
}).listen(9001,function(){
	 console.log('server is up at port-9001');
})

*/

/*
  ---------------Reading Cookie------------------

var express=require('express');
var app=express();
var cookieParser=require('cookie-parser');
app.use(cookieParser());

app.get('/',function(req,res){
     var arr=['shahnawaz','Irfan','Arif','Anas','Pasha','Amil','Talha','Samar'];
     res.cookie('college','Jamia Millia Islamia');      
     res.cookie('students',arr);      
     res.send('cookie is set');
})
app.get('/getCookie',function(req,res){

    res.write('Cookie is '+req.cookies.college);
    res.write('\nCookie is '+req.cookies['college']);
    for(let i=0;i<arr.length;i++)
    res.write('\nCookie is '+req.cookies.students[i]);
    res.end();
}).listen(9001,function(){
	 console.log('server is up at port-9001');
});
*/

//----------------cookie with signature-------------------
var express=require('express');
var app=express();
app.use( require('cookie-parser')('secret'))
 app.get('/',function( req , res ) { 
    res.cookie( 'college' , 'JAMIA' , { signed : true} );
     res.send('Cookie is set'); 

  } );
  app.get('/getCookie',function( req , res ) {
    res.send('Cookie is '+ req.signedCookies.college); 
} ); 
app.listen(9001,function(){
	 console.log('server is up att port-9001');
});