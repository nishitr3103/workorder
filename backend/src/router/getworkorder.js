const router = require('express').Router();
const workOrderData = require('../database/db')

router.post('/getworkorder', (req,res)=>{
    console.log('Get Work Order Router !');
    
    try{
        const reqBody = req.body;
        console.log(`req Body : ${JSON.stringify(reqBody)}`);

        if(Object.keys(reqBody).length === 0){
            console.log('No input provided !')
            return res.status(404).send('Bad request');
        }

        // Filter based on only keys present in reqBody
       const result = workOrderData.filter((data) => {
           return Object.entries(reqBody).every(([key, value]) => {
               console.log(data[key] , value)
           if (!value) return true; // Skip empty/null/undefined filters
           return data[key] && data[key].toString().toLowerCase() === value.toString().toLowerCase();
           });
       });
       
       if(result){
           console.log(`Result : ${JSON.stringify(result)}`)
           res.status(200).json(result);
       }else{
            console.log('No records found !')
            return res.status(204).send();
       }

    }catch(error){
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error')
    }

})

module.exports = router;
