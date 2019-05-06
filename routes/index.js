const express = require('express');
const router = express.Router();
const ToInv = require('../model/Involve');

router.get('/', (req, res) => {
    res.render('index');
})

router.post('/', async (req, res) => {
    const inv = new ToInv({
       title: req.body.revInput,
       condition: req.body.revCondition,
       revType: req.body.revType,
       addNewType: req.body.addNewType,
       rule: req.body.insert,
       revenue: req.body.numb,
    })

    try{
        await inv.save();
        res.redirect('/');
    } catch {
        alert('Failed to submit')
        res.redirect('/');
    }

})


module.exports = router;