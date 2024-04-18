const express = require("express");
require('dotenv').config();
const path = require('path');


const app = express();

const Shoe = require("./models/shoes");
const upload = require("./middlewares/uploadImg");
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set






// getting-started.js
const mongoose = require('mongoose');
const { error } = require("console");

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





app.get("/", (req, res) => {
  res.send("<h1> This is home page </h1>");
})

app.get("/shoes", (req, res) => {
  return res.render("listShoes");
});


app.post("/shoes", upload, async (req, res) => {
  let { price, discount } = req.body;
if(req.uploadError) {
  res.status(404).render("listShoes", {
    uploadError: req.uploadError,
  })
} else {
  console.log("no any error");
  const uploadedFiles = req.files;
  const imageUrls = uploadedFiles.map(file => `/public/img/products/${file.filename}`); // Create image URLs
  let discountPrice = Math.floor((price - ((discount / 100) * price))) || price;
  let result = await Shoe.create({ ...req.body, discountPrice, images: imageUrls });
  res.redirect("/");
}

});


app.listen(port, () => {
  console.log(`server started and app is listening at port: ${port}`);
});