var express = require('express'),
    app = express();

app.set('port', process.env.PORT || 7000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.jade', {title: "Angular - Login"});
});

app.listen(app.get('port'), function() {
    console.log('Servidor iniciado en el puerto ' + app.get('port'));
});