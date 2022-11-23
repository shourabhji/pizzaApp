const express = require("express");
const router = express.Router();
const pizzas = require('../models/pizzas');



//  Route 1 get all Pizzas

router.get('/getAllPizzas',  async (req, res) => {

    try {

        const Pizzas = await pizzas.find();

        res.json(Pizzas);

    } catch (error) {
        res.json({ message: "some error occured " + error })
    }


});

module.exports = router;