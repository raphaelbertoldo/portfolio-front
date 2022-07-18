import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MeDocument = Me & Document;
@Schema()
export class Me {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  city: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;
}

export const MeSchema = SchemaFactory.createForClass(Me);
