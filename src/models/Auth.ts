import mongoose from 'mongoose'

export interface User extends mongoose.Document {
  user: String
  password: String
  role: String
}

export const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
})

export const UserModel = mongoose.model<User>('user', UserSchema)
