import {In,Out} from  './geoloc.js';
import express from  'express';
var app = express();

app.use(express.json());

app.get('/',(req,res)=>{
     res.send('aloww')
})


app.get('/Recebe',(req,res)=>{
     var geo = req.body
     let Resp = In(geo);
     res.send(200);
})

app.post('/Envia',(req,res)=>{
     let Resp = JSON.stringify(Out());
   res.send(Resp);

})

app.listen(4000,()=>{
    console.log('App Rodando na porta: 4000')
})