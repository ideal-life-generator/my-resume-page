//import('node:https');
// import("node:fs");
import http from "http";

const USERS = [
  {
    id: 0,
    name: "Vlad",
  },
  {
    id: 1,
    name: "Olga",
  },
];

const FRUITS = [
  {
    name: "banana",
    price: "$1",
  },
  { name: "orange", price: "$1" },
];

http
  .createServer((request, response) => {
    // request.method = GET, POST, PUT, PATCH, and DELETE
    // More information - https://nodejs.org/docs/latest-v16.x/api/http.html#httprequestoptions-callback

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE"
    );
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (request.url === "/fruits" && request.method === "GET") {
      console.log("/fruits - GET");

      response.writeHead(200);

      response.end(JSON.stringify(FRUITS));

      return;
    }

    if (request.url === "/fruits" && request.method === "POST") {
      console.log("/fruits - POST");

      let payload = "";

      request.on("data", (chunk) => {
        payload += chunk;
      });

      request.on("end", () => {
        const newFruit = JSON.parse(payload);

        FRUITS.push(newFruit);

        response.writeHead(200);

        response.end(JSON.stringify(FRUITS));
      });

      return;
    }

    if (request.url === "/users" && request.method === "GET") {
      console.log("/users - GET");

      response.writeHead(200);

      response.end(JSON.stringify(USERS));

      return;
    }

    response.writeHead(200);

    response.end("site");
  })
  .listen(8000);
