const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const { getCustomers, getCustomerById } = require("../services/customer.dal"); // get data from the database

router.get("/", async (req, res) => { //  a promise for all the customer id's in the database
  let customers = await getCustomers();
  if (customers.length === 0) res.render("norecord");// norecord 
  else {
    res.render("customer.ejs", { customers });
  }
});

router.get("/:id", async (req, res) => { // for each customer in the database by id
  console.log(req.method);
  let customer = await getCustomerById(req.params.id);
  if (customer.length === 0) res.render("norecord");
  else {
    res.render("customer_details.ejs", { customer });
  }
});

module.exports = router;
