const router = require('express').Router();

router.get('/home',(req,res)=>{
    console.log('Home Router !')
    res.status(200).send('home page')
})

module.exports= router;
