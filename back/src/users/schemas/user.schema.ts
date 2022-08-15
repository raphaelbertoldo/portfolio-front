import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  age: String,
  email: String,
  password: String,
});
