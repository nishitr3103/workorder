const express = require("express")
const app = express();
const cors = require("cors");
const bodyparser = require('body-parser')
const homeRouter = require('./src/router/home')
const getWorkOrder = require('./src/router/getworkorder')
const port = process.env.PORT || 3000;


const corsOptions = {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']  
};

app.use(cors(corsOptions));

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

// home endpoint
app.get('/home',homeRouter);
// getWorkorder endpoint
app.post('/getWorkorder',getWorkOrder)

app.listen(port,()=>{
    console.log(`The server is running at port : ${port}`)
})
