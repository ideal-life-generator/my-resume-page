import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import "./Preset.css";
import "./App.css";

fetch("http://localhost:8000/users").then((response) => {
  response.json().then((data) => {
    console.log("users", data);
  });
});

fetch("http://localhost:8000/fruits").then((response) => {
  response.json().then((data) => {
    console.log("fruits", data);
  });
});

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

function App() {
  // const response = await fetch("http://localhost:8000/users");
  // const data = await response.json();

  // console.log("data", data);

  return (
    <>
      <Nav />
      <Header />
      <Main />
    </>
  );
}

export default App;
