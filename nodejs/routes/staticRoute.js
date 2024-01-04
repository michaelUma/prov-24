const express = require('express')
const transaction = require('../models/transaction')

const router = express.Router()

router.get('/',async (req,res) => {
      if(!req.user) return res.redirect('/login')
      const transactions = await transaction.find({createdBy: req.user._id})
      return res.render('home',{
            transaction: allurls
      })
})

router.get('/signup',(req,res)=>{
      return res.render('signUp')
})
router.get('/login',(req,res)=>{
      return res.render('login')
})

module.exports = router