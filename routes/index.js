const express = require('express');
const router = express.Router();
const ToInv = require('../model/Involve');

router.get('/', (req, res) => {
    res.render('index');
})

router.post('/', async (req, res) => {
    const {revInput, revCondition, revType, addNewType, addRule, numb} = req.body
    const inv = new ToInv({
        title: revInput,
        condition: revCondition,
        revType: revType,
        addNewType,
        rule: addRule,
        revenue: numb
    })
    await inv.save((err, doc) => {
        if(!err){
            res.redirect('/');
        } else {
            if(!inv.title || !inv.condition || !inv.revType || !inv.addNewType || !inv.rule || !inv.revenue){
                
                res.render('error')
            }
        }
    })

})

module.exports = router;