import { Document } from 'mongoose';

export class User extends Document {
  name: string;
  username: string;
  age: string;
  email: string;
  password: string;
}
