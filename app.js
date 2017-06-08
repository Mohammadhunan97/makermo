// Config --------------------------------------------

const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const pgp = require('pg-promise')();
const bodyParser = require("body-parser");
const c = console.log;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
 secret: 'ninja_turtles',
 resave: false,
 saveUninitialized: true,
 cookie: { secure: false }
}))

// Config --------------------------------------------

// createdb makermo_db

let db = pgp("postgres://minimoe@localhost:5432/maker_mo_db");


// Routing --------------------------------------------
/*app.get('/path',function(req,res){
	});
*/
// Routing --------------------------------------------



// Controller --------------------------------------------
//app.post()

//app.put()

//app.delete()
// Controller --------------------------------------------


app.listen(3000,function(err){
	err?c('some error has occured'):c('listening on port 3000');
})


