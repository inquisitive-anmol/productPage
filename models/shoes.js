const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    required: true,
    min: 0,
    default: 15,
  },
  discountPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  dStartDate: {
    type: Date,
    default: Date.now,
  },
  dEndDate: {
    type: Date,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ["formal shoes", "running shoes", "casual wear", "sneaker"], // You can add more categories if needed
  },
  gender: {
    type: String,
    required: true,
    touppercase: true,
    enum: ["men", "women", "kids", "unisex"], // You can add more categories if needed
  },
  images: {
    type: [String],
    required: true,
    default: "/img/defaultProd",
  },
  // Optional fields you can add based on your needs
  brand: {
    type: String,
    trim: true
  },
  size: {
    type: String,
    required: true, // Array of available sizes (e.g., 'US 7', 'EU 40')
  },
  color: {
    type: String,
    trim: true
  },
  material: {
    type: String,
    trim: true
  },
  reviews: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Review' // Reference to a separate Review model (optional)
  },
  status: {
    type: String,
    touppercase: true,
    enum: ["sell", "sold", "delivered", "return", "returned"],
    default: function () {
      return this.quantity > 0 ? "sell" : "sold"
    },
  },
  New: {
    type: Boolean,
    enum: ["true", "false"],
    default: "false",
  },

},
  { timestamps: true });

module.exports = mongoose.model('Shoe', shoeSchema);
