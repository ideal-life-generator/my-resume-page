// Handle Get request =============

// #1

fetch("http://localhost:8000/fruits").then((response) => {
  response.json().then((data) => {
    console.log("fruits", data);
  });
});

// #2

const response = await fetch("http://localhost:8000/fruits", {
  method: "GET",
});
const data = await response.json();

console.log("fruits", data);

// Handle POST request =============

fetch("http://localhost:8000/fruits", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Kiwi",
    price: "1$",
  }),
}).then((response) => {
  response.json().then((data) => {
    console.log("fruits", data);
  });
});
