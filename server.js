const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.get('/', (req, res) => {
    console.log('here')
    res.json({
        message: 'works'
    })
})

const userRouter = require('./routes/users')
const mailRouter = require('./routes/mail')

app.use('/users', userRouter)
app.use('/mail', mailRouter)

app.listen(port)