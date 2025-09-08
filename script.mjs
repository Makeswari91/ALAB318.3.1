//Imports
import express from 'express';

//setups
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
//globalerror handling
app.use(function (err, req, res, next) {
  res.status(500).json({ msg: err.message });
});
//server listener
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})