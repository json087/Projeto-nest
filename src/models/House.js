import { Schema, model } from "mongoose";
import user from "./user";
import { number } from "yup";


const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user:{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
}, {
  toJSON:{virtuals: true}
})

HouseSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost4000/files/${this.thumbnail}`
})

export default model('House', HouseSchema)