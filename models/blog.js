const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3
  },
  author: String,
  url: {
    type: String,
    required: true,
    minLength: 5
  },
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  comments: [{
    content:{ type:String, minLength: 2 }
  }]
});

blogSchema.set('toJSON', {
  transform:(document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  }
});


module.exports= mongoose.model('Blog', blogSchema);
