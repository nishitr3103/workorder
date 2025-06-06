const router = require('express').Router();
const workOrderData = require('../database/db')

router.post('/getworkorder',(req,res)=>{
    console.log('Get Work Order Router !')

    const empId = req.body.empId;
    console.log(`emp id : ${empId}`)
    const result = workOrderData.filter((data)=>{
        return data.empNo === empId;
    })
    console.log(`Result : ${JSON.stringify(result)}`)
    res.status(200).json(result);
})

module.exports= router;
