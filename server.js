let express = require('express');
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let routes = require('./routes');

let app = express();

let connectToDb = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/lostAndFound');
    
    mongoose.connection.once('open',()=>{
        console.log('DB CONNECTION SUCCESSFUL');
    }).on('error',(error)=>{
        console.log('DB CONNECTION FAILED (check whether database is running), error object : ', error);
    });
}

let startServer = () =>{
    // Middlewears
    app.use(morgan('dev'));
    app.use(bodyParser.json());

    // Routing configurations 
    app.use(express.static(__dirname + '/dist/public'));
    app.use('/api',routes);
    app.get('*', function(req, res){
        res.sendFile(__dirname + '/dist/public/index.html');
    });

    // Connection to db
    connectToDb();

    // Starting Server
    app.listen(8000 ,"0.0.0.0", () =>{
        
        console.log('Server is now running at post 8000 in localhost somechange');
    });
}

startServer();