let path = require('path');
let express = require('express');

let app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.set('port', process.env.PORT || 8080);
app.get('*',  (request, response)=>{
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

let server = app.listen(app.get('port'), function() {
    console.log('listening on port ', server.address().port);
});