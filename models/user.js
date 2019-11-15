const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username : {
    type: String,
    unique: true,
    minLength: 3,
    required: true
  },
  passwordHash:String,
  name:String,
  blogs: [{
    //The type of the field is ObjectId that references blog-style documents
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }]
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.__v;
    delete returnedObject._id;

    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  }
});

const User = mongoose.model( 'user', userSchema);

module.exports = User;
