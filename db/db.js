// createdb makermo_db
const pgp = require('pg-promise')();
let db = pgp("postgres://minimoe@localhost:5432/maker_mo_db");

module.exports = db;