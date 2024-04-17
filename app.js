const express = require("express");
require('dotenv').config();
const path = require('path');

const Shoe = require("./models/shoes");
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set

const app = express();




// getting-started.js
const mongoose = require('mongoose');

main()
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/practice');
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.get("/shoes", (req, res) => {
return res.render("listShoes");
});


app.post("/shoes", async (req, res) => {
let result = await Shoe.create({...req.body, discountPrice: 3455});
res.send(result);
});




app.listen(port, () => {
    console.log(`server started and app is listening at port: ${port}`);
});