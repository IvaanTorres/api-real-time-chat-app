import mongoose from 'mongoose'

// Interface for the Comment model
interface Comment extends mongoose.Document {
  body: string
  user: string
  created_at: Date
  updated_at: Date
}

// Comment Schema
const CommentSchema = new mongoose.Schema({
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
const CommentModel = mongoose.model<Comment>('Comments', CommentSchema)
export { Comment, CommentSchema, CommentModel }
