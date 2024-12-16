import mongoose from 'mongoose'
import { User } from './models.js'

export async function connectDB() {
    const first = mongoose.connection.readyState === 0
    if (first) {
        mongoose.connection.on('connected', () => console.log('Connected to Database'))
        mongoose.connection.on('disconnected', () => console.log('Disconnected from Database'))
        await mongoose.connect(process.env.MONGO_URL)
        await initDB()
    } else {
        await mongoose.connection.asPromise()
    }
}

export async function disconnectDB() {
    await mongoose.disconnect()
}

async function initDB() {
    if (!await User.exists({})) {
        console.log("Add first User")
        const firstUser = new User({ name: 'Erster User' })
        await firstUser.save()
    }
}