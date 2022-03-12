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

//! PREGUNTAR: AL HACER POST, DA ERROR SI LA FECHA ES MAYOR A 2000, PERO SI LUEGO LO ACTUALIZO NO SE QUEJA
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
