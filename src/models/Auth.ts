import mongoose from 'mongoose'

// Interface for the User model
interface User extends mongoose.Document {
  user: string
  password: string
  role: string
}
// User Schema
const UserSchema = new mongoose.Schema({
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
// Create the User model
const UserModel = mongoose.model<User>('user', UserSchema)
export { User, UserSchema, UserModel }
