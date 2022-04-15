import mongoose from 'mongoose'
// eslint-disable-next-line import/no-extraneous-dependencies

// Interface for the Message model
interface Message extends mongoose.Document {
  body: string
  user: string
  createdAt: Date
  updatedAt: Date
}

// Message Schema
const MessageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  user: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
}, {
  timestamps: true,
})

// Create the Comment model
const MessageModel = mongoose.model<Message>('Messages', MessageSchema)
export { Message, MessageSchema, MessageModel }
