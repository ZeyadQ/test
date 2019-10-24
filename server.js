const express = require('express'); // get express server up and running 
const app = express(); // initialize our app variable with express
app.get ('/', (req,res) => res.send('API Running '));
const PORT = process.env.PORT || 5000;// we put the port in avariable 
app.listen(PORT,()=> console.log(`Server started omn port ${PORT} `)); // listen on a port 