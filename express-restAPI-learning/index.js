const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();




//Init Middleware
//app.use(logger);

//Handlebars Middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars');



// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));


// Set Static folder - used only for swtiching between static and template engine. This is only here to show it is possible to use 

app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes 
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 7890;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));