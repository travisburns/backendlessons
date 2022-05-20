const express = require('express');

//express app
const app = express();




app.listen(4680);



app.get('/', (req, res) => {
   
    res.sendFile('./directory/index.html', {root: __dirname });
});

app.get('/about', (req, res) => {
    
    res.sendFile('./directory/about.html', {root: __dirname });
});


app.get('/contact-me', (req, res) => {

    res.sendFile('./directory/contact-me.html', {root: __dirname });
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})


// 404 page

app.use((req, res) => { 
    res.sendFile('./directory/404.html', {root: __dirname });
})