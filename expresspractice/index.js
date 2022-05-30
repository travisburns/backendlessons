const express = require ('express');
const path = require('path');

const logger = require('./middleware/logger')



const app = express();



//init middleware
//app.use(logger);

//Body parser MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5100;
//when we deploy the server is going to be running in a env port if not then it will listen on a server '5100' in this case.
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));




