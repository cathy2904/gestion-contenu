import { Schema, Document } from 'mongoose';
import { Role } from 'src/roles/roles.enum';

export const UserSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(Role), default: Role.USER },
  createdAt: { type: Date, default: Date.now },
  socialAccounts: {
    facebook: {
      id: String,
      token: String,
      displayName: String,
    },
    instagram: {
      id: String,
      token: String,
      displayName: String,
    },
    linkedin: {
      id: String,
      token: String,
      displayName: String,
    },
  },

});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
  socialAccounts?: {
    facebook?: { id: string; token: string; displayName: string };
    instagram?: { id: string; token: string; displayName: string };
    linkedin?: { id: string; token: string; displayName: string };
  };
}
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type UserDocument = User & Document;

// @Schema()
// export class User {
//   @Prop({ required: true })
//   username: string;

//   @Prop({ required: true, unique: true })
//   email: string;

//   @Prop({ required: true })
//   password: string;

//   @Prop({ default: Date.now })
//   createdAt: Date;
// }

// export const UserSchema = SchemaFactory.createForClass(User);