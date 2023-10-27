import http from "http";
import express from "express";
import cors from "cors";

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

const FORMS = [];

const app = express();

app.use(express.json());

// app.use((request, response) => {
//   let body = "";

//   request.on("data", (chunk) => {
//     body += chunk;
//   });

//   request.on("end", () => {
//     request.body = JSON.parse(body);
//   });
// }); === +/- app.use(express.json());

app.use(cors());

app.get("/users", (_request, response) => {
  response.send(USERS);
});

app.get("/fruits", (_request, response) => {
  response.send(FRUITS);
});

app.post("/fruits", (request, response) => {
  console.log("/fruits POST", request.body);
});

app.post("/form", (request, response) => {
  console.log("form POST", request.body);

  FORMS.push(request.body);

  response.send(request.body);
});

app.listen(8000);

http
  .createServer((request, response) => {
    console.log("app.use I'm in 'use'", request, response);

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

    if (request.url === "/form" && request.method === "POST") {
      console.log("/form - POST");

      let payload = "";

      request.on("data", (chunk) => {
        payload += chunk;
      });

      request.on("end", () => {
        const newForm = JSON.parse(payload);

        console.log(newForm);

        FORMS.push(newForm);

        response.writeHead(200);

        response.end(payload);
      });

      return;
    }

    if (request.url === "/forms" && request.method === "GET") {
      console.log("/forms - GET");

      response.writeHead(200);

      response.end(JSON.stringify(FORMS));

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
  .listen(8001);
