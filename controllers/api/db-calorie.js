const router = require('express').Router();
require('dotenv').config();
const { Calorie, Date } = require('../../models')

router.post('/', async (req,res) => {
    try {
        // Finding if current date is already in database
        //const currentDate = await Date.findOne({where:CURRENTDATE})

        //if (!currentDate) {
        //     constAddDate = await Date.create({CURRENTDATE})
        // }

        // const userCalData = await Calorie.create(req.body);
        // res.status(200).json(userCalData);
        console.log('hello');
    }

    catch (err) {
        res.status(400).json(err);
    }
})