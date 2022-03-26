const dal = require("./db");// to the database file to access postgres database

var getLanguages = function() {
  return new Promise(function(resolve, reject) {// promise: to select  all the language id's from the database
    const sql = "SELECT language_id, name FROM language";// selects all the language id's  and name from the database 
    dal.query(sql, [], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};

var addLanguage = function(name) {      //promise to add a language from the database
  return new Promise(function(resolve, reject) {
    const sql = "INSERT INTO public.language(name) VALUES ($1);";// selects and inserts a individual language id's into the database 
    dal.query(sql, [name], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};





module.exports = {
  getLanguages,
  addLanguage,

}