# proxy
A proxy demo

# installation and running
 npm install
 npm start

# test
## get reqeust
 $ curl http://localhost:8000/proxy/http://httpbin.org/get
```
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.54.0"
  },
  "origin": "72.142.16.190, 72.142.16.190",
  "url": "https://httpbin.org/get"
}
```

## post request
 $ curl -X POST -d asdf=blah http://localhost:8000/proxy/http://httpbin.org/post
```
{
  "args": {},
  "data": "",
  "files": {},
  "form": {
    "asdf": "blah"
  },
  "headers": {
    "Accept": "*/*",
    "Content-Length": "9",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.54.0"
  },
  "json": null,
  "origin": "72.142.16.190, 72.142.16.190",
  "url": "https://httpbin.org/post"
}
```

## invalid reqeust
 $ curl http://localhost:8000/proxaay/http://httpbin.org/get
 ^C
