/**
 * Module dependencies.
 */
const express = require('express');
const compiler = require('./routes/compiler');
const http = require('http');
const path = require('path');

const cors = require('cors');

const app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);

  app.use(cors());
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

app.post('/api/compile', compiler.compile);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
