import { config } from 'dotenv';

config()

export const mongodb_Uri = process.env.MONGODB_URI

export const PORT = process.env.PORT || 3000

