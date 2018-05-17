let express = require('express');
let routes = require('./routes');

let app = express();

app.use(express.static(__dirname + '/dist/public'));

app.use('/api', routes);

app.get('*', function(req, res){
    res.sendFile(__dirname + '/dist/public/index.html');
  });

app.listen(8000, () =>{
    console.log('Server is now running at post 8000 in localhost');
})