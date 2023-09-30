const express = require('express');
const router = express.Router();
const Model = require('../model/model');

// router.get('/getAll',(req,res)=>{
//     res.send({name:'Get All API'})
// })
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        console.log('data', data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;