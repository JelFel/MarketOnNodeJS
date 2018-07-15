import express from 'express';
import path from 'path';
const app = express();
// Import routes
//require('./_routes')(app);   // <-- or whatever you do to include your API endpoints and middleware
app.set('port', 8080);

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,'../client/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Приложение запущено успешно. Порт: 8080');
});