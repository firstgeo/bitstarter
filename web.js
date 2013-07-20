var express = require('express')
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
<<<<<<< HEAD
  response.send('Hello from emacs this time!');
  
>>>>>>> 59b80af2fdf2f31e2e10cb319f57abe6b3516023
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
