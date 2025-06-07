const router = require('express').Router();
const workOrderData = require('../database/db')

router.post('/getworkorder', (req,res)=>{
    console.log('Get Work Order Router !')
    console.log(req)
    const reqBody = req.body;
    console.log(`req Body : ${JSON.stringify(reqBody)}`)
    const result = workOrderData.filter((data)=>{
        console.log(data.workorder , reqBody.workorder)
        return data.workorder === reqBody.workorder;
    })
    console.log(`Result : ${JSON.stringify(result)}`)
    res.status(200).json(result);
})

module.exports = router;
