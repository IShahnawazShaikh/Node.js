// var express=require('express');
// var app=express();
// app.get('/',function(req,res){
//     //res.send('hello Express u hit /');

//     res.sendFile(__dirname+'/public/'+'index.html');
// });
// app.get('/home',function(req,res){
// 	res.sendFile(__dirname+'/public/'+'index.html');
// });
// app.get('/image1.jpg',function(req,res){
//     res.sendFile(__dirname+'/public/image/'+'image1.jpg');
// });
// app.get('/style.css',function(req,res){
// res.sendFile(__dirname+'/public/'+'style.css');
// });
// app.listen(9001,function(){

// 	 console.log('server is running at 9001');
// })


/*------------The above code is too tedious and here we are handling all requests*/

/*-----------Solving above problem----------------*/


var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/',function(request,response){
     response.sendFile(__dirname+'/public/'+'index.html');
});
app.listen(9001,function(){

	 console.log('server is running at 9001');
})
