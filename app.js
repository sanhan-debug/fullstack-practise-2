import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { User } from './Model/userModel.js'
import { connect } from 'mongoose'
import { userRouter } from './Routes/userRoutes.js'

dotenv.config()
let PORT = 3000 
const app = express()
const URI = process.env.URI

app.use(cors())
app.use(express.json())
app.use("/",userRouter)

app.get("/", (req, res) => {
    res.send('server is active')
})


app.listen(PORT, () => {
    console.log(`server is active on ${PORT} port`)

    connect(URI).then(() => console.log("connected to the mongoDB"))
})
