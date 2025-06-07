const router = require('express').Router();
const workOrderData = require('../database/db')

router.post('/getworkorder', (req,res)=>{
    console.log('Get Work Order Router !');
    const reqBody = req.body;
    console.log(`req Body : ${JSON.stringify(reqBody)}`);

     // Filter based on only keys present in reqBody
    const result = workOrderData.filter((data) => {
        return Object.entries(reqBody).every(([key, value]) => {
            console.log(data[key] , value)
        if (!value) return true; // Skip empty/null/undefined filters
        return data[key] && data[key].toString().toLowerCase() === value.toString().toLowerCase();
        });
    });

    console.log(`Result : ${JSON.stringify(result)}`)
    res.status(200).json(result);
})

module.exports = router;
