import mongoose from 'mongoose'

//! INTERFACES
interface Comment extends mongoose.Document {
  body: String
  user: String
  created_at: Date
  updated_at: Date
}

//! SCHEMA
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

const CommentModel = mongoose.model<Comment>('Comments', CommentSchema)
export { Comment, CommentSchema, CommentModel }
