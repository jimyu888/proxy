#!/usr/bin/env node

const express = require('express');
const request = require('request');

const handler = (req, res) => {
  if (req.url.substring(0,7)=='/proxy/') {
	let url = req.url.substring(7);
        console.log('request method:', req.method);
  	console.log('request url=', url);
	req.pipe(request({ url: url })).pipe(res);
  } else {
        console.log("Invalid request.");
  }
};
const server = express().get('*', handler).post('*', handler);

server.listen(8000);
