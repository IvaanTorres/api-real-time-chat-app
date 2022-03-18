import mongoose from 'mongoose'

interface Author extends mongoose.Document {
  name: {
    type: String
    required: true
  }
  yearBirth: {
    type: Number
    min: 0
    max: 2000
  }
}

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  yearBirth: {
    type: Number,
    min: 0,
    max: 2000,
  },
})

const AuthorModel = mongoose.model<Author>('authors', AuthorSchema)
export { Author, AuthorSchema, AuthorModel }
