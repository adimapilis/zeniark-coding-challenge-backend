require('dotenv').config()
const express = require("express");
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 8080


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use((req,res,next)=>{
  console.log(req.method, req.url)
  next()
})

// imports routes in the routes folder
app.use('/', require('./routes/questionRoutes'))

// handles unmatched requests
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('json')) {
    res.json({message: '404 Not Found'})
  } else {
    res.type('text').send('404 Not Found')
  }
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})