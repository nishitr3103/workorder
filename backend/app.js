const express = require("express")
const app = express();
const port = process.env.PORT || 3000;
const homeRouter = require('./src/router/home')
const getWorkOrder = require('./src/router/getworkorder')

// configuring express to parse incoming json
app.use(express.json()); 
// home enpoint
app.get('/home',homeRouter);
// getWorkorder enpoint
app.post('/getWorkorder',getWorkOrder)

app.listen(port,()=>{
    console.log(`The server is running at port : ${port}`)
})
