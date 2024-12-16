import cors from 'cors'
import express from 'express'
import { connectDB } from './db.js'
import router from './routes.js'

await connectDB()


const app = express()

app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ limit: '2mb', extended: true }))
app.use(
    cors({
        credentials: true,
        origin: [process.env.VITE_FRONTEND_URL, process.env.VITE_BACKEND_URL]
    })
)


app.use(router)

app.listen(3000, () => {
    console.log(`Example app running on ${process.env.VITE_BACKEND_URL}`)
})
