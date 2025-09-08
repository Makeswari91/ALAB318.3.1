//Imports
import express from 'express';
import userRoute from "./routes/userRoute.mjs";
import postRoute from "./routes/postRoute.mjs";

//setups
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

//Routes
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

//globalerror handling
app.use(function (err, req, res, next) {
  res.status(500).json({ msg: err.message });
});
//server listener
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})