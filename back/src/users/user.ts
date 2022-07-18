import { Document } from 'mongoose';

export class User extends Document {
  name: string;
  age: string;
  email: string;
  password: string;
}
