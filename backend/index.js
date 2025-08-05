const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const connect = require('./config/db');
const authRoutes = require('./routes/auth');
app.use(express.json());

//MongoDb Connection
connect();




app.get("/",(req,res)=>{
    res.send("Hello World")
});

//Authorization Routes
app.use('/api/auth',authRoutes);

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})

