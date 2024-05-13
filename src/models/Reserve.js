import { Schema, model } from 'mongoose';
import user from './user';

const ReserveSchema = new Schema({
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: 'House'
  }
});
export default model('Reserve', ReserveSchema);