const dal = require("./db"); // to the database file to access postgres database

var getCustomers = function () {
  return new Promise(function (resolve, reject) { // promise to select  all the customer id's from the database
    const sql =
      "SELECT cus_id, COUNT (cus_id) FROM customer_yearly_rentals GROUP BY cus_id ORDER BY cus_id ASC"; // selects all the customer id's from the database and organizes them ascending  order
                                                                                                    
    dal.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};
var getCustomerById = function (id) {// promise to select  all the customer id's from the database
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM customer_yearly_rentals WHERE cus_id = $1";// selects individual customer id's from the database and displays the rental data
    dal.query(sql, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};



module.exports = {
  getCustomers,
  getCustomerById,

};
