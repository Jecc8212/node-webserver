const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config()

const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parcials');

app.use( express.static('public') );



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Julian carrasco',
        titulo: 'Curso de Node'
    });
});


app.get('/generic',  (req, res)=> {
    res.render('generic', {
        nombre: 'Julian carrasco',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Julian carrasco',
        titulo: 'Curso de Node'
    });
});


// app.get('/generic',  (req, res)=> {
//   res.sendFile(__dirname + '/public/index.html')
// });

// app.get('/elements',  (req, res)=> {
//     res.sendFile(__dirname + '/public/elements.html')
//   });






app.listen(port, ()=>{
    console.log(`Example app listenig at gtpp://localhost:${port}`)
})
