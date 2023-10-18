//import('node:https');
// import("node:fs");
import http from "http";

http
  .createServer((req, res) => {
    console.log(req);

    res.writeHead(200);

    res.end("hello world\n");
  })
  .listen(8000);
