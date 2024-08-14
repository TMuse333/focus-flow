// textImage.model.js

import mongoose from 'mongoose';

const textImageSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true
    },
  texts: {
    type: [String],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  buttonText:{
    type: String,
    required:true
  }
  
});

const TextImage = mongoose.model('TextImage', textImageSchema);

export default TextImage;
