let express = require('express');
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let logger = require('logger').createLogger('development.log');
var path = require('path');

let routes = require('./routes');

let app = express();

let connectToDb = () =>{
    // mongoose.connect('mongodb://127.0.0.1:27017/lostAndFound');
    mongoose.connect('mongodb+srv://summy:testpassword@cluster0-kxts6.mongodb.net/lostAndFound?retryWrites=true', { useNewUrlParser: true });
    
    mongoose.connection.once('open',()=>{
        console.log('DB CONNECTION SUCCESSFUL');
    }).on('error',(error)=>{
        console.log('DB CONNECTION FAILED (check whether database is running !), error object : ', error);
    });
}

let startServer = () =>{
    // Middlewears
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    // console.log('$$$  process.env: ', process.env);
    // console.log('###PORT NUMBER  process.env.PORT ::::  ',  process.env.PORT);
    if(!process.env.PORT){
        console.log('over riding port number');
        // process.env.PORT = 8000;
    }
    // Routing configurations
    app.use(express.static(__dirname + '/dist/public'));
    
    // API & Controller requests
    app.use('/api',routes);
    
    // Wild Card 
    app.get('*', function(req, res){
        res.sendFile(__dirname + '/dist/public/index.html');
    });

    // Connection to db
    connectToDb();

    // Starting Server
    app.listen(process.env.PORT ,"0.0.0.0", () =>{
        logger.info(`server start on port ${process.env.PORT} `);
        console.log('Server is now running at port 8000 in localhost');
    });
}

startServer();