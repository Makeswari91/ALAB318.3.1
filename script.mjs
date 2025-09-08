//Imports
import express from 'express';

//setups
const app = express();
const PORT = 3000;

//Middleware

//globalerror handling

//server listener
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})