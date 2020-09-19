const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const moment = require("moment");
const Schema = mongoose.Schema;

const FavouriteSchema = mongoose.Schema({
  userFrom: { type: Schema.Types.ObjectId, ref: "User" },
  movieId: { type: String },
  movieTitle: { type: String },
  movieImage: { type: String },
  movieRunTime: { type: String },
});

const Favourite = mongoose.model("Favourite", FavouriteSchema);

module.exports = { Favourite };
