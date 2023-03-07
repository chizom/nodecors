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
const bitcoinRouter = require('./routes/bitcoin')
const ethereumRouter = require('./routes/ethereum')

app.use('/users', userRouter)
app.use('/bitcoin', bitcoinRouter)
app.use('/ethereum', ethereumRouter)

app.listen(port)