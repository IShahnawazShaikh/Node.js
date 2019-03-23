var express=require('express');
var app=express();
var handle=require('express3-handlebars');
app.engine('hbs',handle());
app.set('view engine','hbs');
app.get('/',function(req,res){
    res.render('index',{
    	setTitle:'Learning Handlebars',
    	value:'This is a Templating language',
    	concepts:['Lambda Expression','default method','static method','Stream API','Time AP1','forEach'],
        students:[{name:'shah',java:'95',C:'99'},{name:'Irfan',java:'90',C:'89'}]
    });
}).listen(9001,function(){
	  console.log('server is up at 9001');
})