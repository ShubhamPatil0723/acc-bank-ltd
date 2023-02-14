import express from 'express'
import {json, urlencoded } from 'express'
import cors from 'cors'
import {router} from './routes/router.js'

//import cors from 'cors';

const app = express()

// middleware

app.use(json())

app.use(urlencoded({ extended: true }))


// routers
app.use('/user', router)


//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})