const dal = require("./db");// to the database file to access postgres database

var getStores = function() {  // promise: to select  all the stores data from the database
    return new Promise(function(resolve, reject) {    
      const sql = "SELECT * FROM vw_stores";      // selects all the stores data from the database  
      dal.query(sql, [], (err, result) => {
        if (err) {
            reject(err);
          } else {
            resolve(result.rows);
          }
      }); 
    });
  };

var getStoreById = function(id) { // promise: to select store id from the database
  return new Promise(function(resolve, reject) { 
    const sql = "SELECT * FROM vw_stores WHERE store_id = $1"; // selects the stores data by id from the database
    dal.query(sql, [id], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};
var getLangRevenueByStoreId = function(id) {  // promise: to select languages by store id from the database
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM vw_bestrentalsforlanguage WHERE store_id = $1 LIMIT 20";  // selects the best rentals for language data by store id from the database
    dal.query(sql, [id], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};

var getLangRevenueByStoreIdLanguage = function(id, name) {  // promise: to select languages by store id from the database
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM vw_bestrentalsforlanguage \
      WHERE store_id = $1 AND name = $2 LIMIT 5";   // selects from the view in the database best rentals language by store id's 
    dal.query(sql, [id, name], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};


module.exports = {
  getStores,
  getStoreById,
  getLangRevenueByStoreId,
  getLangRevenueByStoreIdLanguage,
}