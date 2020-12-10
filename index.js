const express = require("express");
const bodyParser  = require ('body-parser') 
const handlebars = require('express-handlebars');
const app = express();

//Config 
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Body Parser
    app.use (bodyParser.urlencoded({extended:false } )   )
    app.use(bodyParser.json())


//Rotas
app.get('/', function(req,res) {
    res.send('O servidor está funcionando');
})

app.get('/cad', function(req,res) {
    res.render(__dirname +'/views/layouts/formulario')
})

app.post('/add', function(req,res) {
    req.body.conteudo;
    res.send("Texto: " +req.body.titulo + "Conteudo: " + req.body.conteudo);
})
 
//Conexão do servidor
app.listen(8081, function(){
    console.log('O servidor está rodando na url http://localhost:8081/')
});