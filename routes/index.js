var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var knex = require('knex')({
    dialect: 'mysql',
    connection: {
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'my-nodeapp-db',
		charset  : 'utf8'
      }
});
var Bookshelf = require('bookshelf')(knex);
var User = Bookshelf.Model.extend({
   tableName: 'users'
});


router.get('/', (req, res, next) => {
   if (req.session.login == null){
       if(req.session.now_url != null){
           res.redirect(req.session.now_url);
       }
      res.redirect('/users');
   } else {

      res.render('home.ejs');
   }
});



module.exports = router;
