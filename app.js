// Config --------------------------------------------

const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const pgp = require('pg-promise')();
const bodyParser = require("body-parser");
const db = require("./db/db.js");
console.log(db);
const c = console.log;
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Config --------------------------------------------

// Routing --------------------------------------------
app.get('/',function(req,res){
	res.render('index');
	});

// Routing --------------------------------------------
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.send("This page does not exist, this could be because you are trying to access or alter from a database entry that has already been deleted");
});


// Controller --------------------------------------------
app.post('/mail/new',function(req,res){
	db.query("INSERT INTO mail_list(name,email)VALUES($1,$2);",[req.body.name,req.body.email]);
})
app.post('/contact/new',function(req,res){
	db.query("INSERT INTO contact_me(name,email,phone,mycontent)VALUES($1,$2,$3,$4);",[req.body.name,req.body.email,req.body.phone,req.body.mycontent]);
})

app.get('/mail/delete/:id',function(req,res){
	let query = db.one("SELECT * FROM mail_list WHERE id=$1;",[req.params.id]).then(function(data){
		res.send(data.name + ' has been removed from the mailer');
		setTimeout(function(){
			db.none("DELETE FROM mail_list WHERE id=$1;",[req.params.id]);
		})
	})
})
// Controller --------------------------------------------


app.listen(3000,function(err){
	err?c('some error has occured'):c('listening on port 3000');
})


