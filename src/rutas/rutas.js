const { Router } = require('express');
const express = require('express');
const router = express.Router();
const config = require('../../config/config')

router.get("/",(req,res)=>res.send("Hola"));
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
router.get('/envio-correo',(req,res)=>{
    let asunto = req.query.asunto;
    let contenido = req.query.contenido;
    let destino = req.query.destino;
    const msg = {
        to: `${destino}`, // Change to your recipient
        from: 'luisexneider1999@gmail.com', // Change to your verified sender
        subject: `${asunto}`,
        text: `${contenido}`,
        html: `${contenido}`,
      }
      sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
        res.send("Mensaje enviado");
      })
      .catch((error) => {
        console.error(error)
        res.send("Mensaje no enviado");
      })
      
});
module.exports=router;