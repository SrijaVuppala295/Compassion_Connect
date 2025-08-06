const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const connect = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MongoDb Connection
connect();


//cors connection
app.use(cors({
  origin: 'http://localhost:5173', // or wherever your React app is running
  credentials: true
}));




app.get("/",(req,res)=>{
    res.send("Hello World")
});

//Authorization Routes
app.use('/api/auth',authRoutes);

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})

