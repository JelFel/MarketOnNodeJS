import express from 'express';
import path from 'path';
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const app = express();

app.set('port', 8000);

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.get("/app",function(req,res){
    res.send("Страница /app");
});

app.listen(app.get('port'), function() {
    console.log('Приложение запущено успешно. Порт: 8000');
});