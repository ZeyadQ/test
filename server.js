const express = require('express'); // get express server up and running 
const connectDB = require('./config/db');

const app = express(); // initialize our app variable with express

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

app.get ('/', (req,res) => res.send('API Running '));

// define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;// we put the port in avariable 

app.listen(PORT,() => console.log(`Server started omn port ${PORT} `)); // listen on a port 