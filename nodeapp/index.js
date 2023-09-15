'use strict';
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const getStudent = require('./student');
const getStaff = require('./staff');
const getAccounts = require('./account');

const port = 4000;
const hostname = '127.0.0.1';

//Routing declaration
const route = {
  student: getStudent,
  staff: getStaff,
  account: getAccounts,
};

// NOt found function
const notFound = (input, callback) => {
  callback(404);
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  //Get path name without query and hostname
  const path = parsedUrl.pathname;
  const parsedPath = path.replace(/^\/+/, '');

  //Get method as object
  const method = req.method.toUpperCase();

  //Get Query as object
  const query = parsedUrl.query;

  // Get Headers
  const headers = req.headers;

  //Creating a string decoder
  const decoder = new StringDecoder('utf-8');
  let body = '';

  //Listen on data  event
  req.on('data', (data) => {
    body += decoder.write(data);
  });

  //Listen on end event
  req.on('end', () => {
    body += decoder.end();

    const routeHandler =
      typeof route[parsedPath] !== 'undefined' ? route[parsedPath] : notFound;

    const requestObject = {
      pathname: 'parsedPath',
      headers,
      method,
      query,
      body,
    };

    routeHandler(requestObject, (statusCode, responseObject) => {
      statusCode = typeof statusCode === 'number' ? statusCode : 200;
      // CROS enabling
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      responseObject =
        typeof responseObject === 'object'
          ? responseObject
          : { message: '', data: null };
      res.end(JSON.stringify(responseObject));
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`the server is running at http://${hostname}:${port}`);
});
