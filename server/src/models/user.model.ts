import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  username: string
  fullName: string
  email: string
  avatar: string
  bio: string
  password: string
  followers: string[]
  following: string[]
  profileImg: string
  coverImg: string
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  avatar: { type: String },
  bio: { type: String },
  password: { type: String, required: true }
})

//create a reference to the User model
userSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author'
})

const User = mongoose.model<IUser>('User', userSchema)
export default User
