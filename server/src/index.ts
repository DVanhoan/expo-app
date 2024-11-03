import { v2 as cloudinary } from 'cloudinary'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

import authRoutes from './routes/auth.route'

import connectMongoDB from './db/connectMongoDB.js'

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  connectMongoDB()
})
