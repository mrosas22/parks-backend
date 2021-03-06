const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // document structure & rules defined here
    fullName: {
      type: String,
      required: true,
      minlength: 2
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^.+@.+\..+$/
    },
    encryptedPassword: { 
      type: String, 
      required: true 
    },
    bio      : {type: String, require: false},
    gender   : {type: String, require: false},
    age      : {type: Number, require: false},
    role     : {type: String, enum: ['GUEST', 'EDITOR', 'ADMIN'], default: 'GUEST'},
  },
  {
    timestamps: true
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
