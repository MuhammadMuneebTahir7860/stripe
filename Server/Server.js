var express =require('express');
var cors=require('cors');
var bodyParser = require('body-parser');
var async = require("async");
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51JL6XIDrfg99ugjlHLfaCN9FPaf5PjNIzKiH0X1gQLsoQbfa4tAP4rt4H1fonuEM61AhJNqdtPSddWceM5dZ1qss00Axl5HAqo');
var app=express();

app.use(bodyParser.urlencoded({
    extended:true,
}));
app.use(bodyParser.json());
app.use(cors());

app.post('/payment',cors(), async(req,res)=>{
        try {
          const { amount, source, receipt_email } = req.body
          const charge = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: "Pizza",
            payment_method:source,
            confirm:true,
          })
      
          if (!charge) throw new Error('charge unsuccessful')
      
          res.status(200).json({
            message: 'charge posted successfully',
            charge
          })
        } catch (error) {
          res.status(500).json({
            message: error.message
          })
        }
})

app.listen('5000',(error)=>{
    if(error){
        console.log(error.message);
    }
})