import express from 'express'
import { User } from './models.js'

const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/user', async (req, res) => {
    const docs = await User.find({})
    res.send({ data: docs })
})

export default router