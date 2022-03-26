const express = require("express");
const app = express();



const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Simple app running on port ${PORT}.`);
});

app.set("view engine", "ejs");



const storesRouter = require("./routes/stores");
app.use("/stores", storesRouter);

const languagesRouter = require("./routes/languages");
app.use("/languages", languagesRouter);

const customerRouter = require("./routes/customer");
app.use("/customer", customerRouter);

const homeRouter = require("./routes/home");
app.use("/home", homeRouter);

const aboutRouter = require("./routes/about");
app.use("/about", aboutRouter);


app.get("/customer", (req, res) => {
  res.render("customer");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {  
  res.status(404).render("404");
});
