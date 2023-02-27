import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [like, setLike] = useState([]);
  const getMovie = async () => {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?i=tt3896198&apikey=c89e78e0"
      );
      // .then((res) => console.log(res))
      // .then((data) => console.log(data));
      // console.log(like);
      if (!response.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        const data = await response.json();
        console.log(data);
        setLike((prevData) => {
          return [...prevData, { ...data, id: like.length }];
        });
      }
    } catch (error) {
      console.log("non ricevo dati");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {like.length}
        </a>
        <button onClick={getMovie}>premi</button>
        <ul>
          {like
            ? like.map((item) => (
                <li key={item.id}>
                  {/* {Object.entries(item).map(
                    ([key, value]) => `${key}: ${value}`
                  )} */}
                  <img src={item.Poster} alt="ok" />
                  <div>{item.Plot}</div>
                  <div>{item.Actors}</div>
                </li>
              ))
            : "no item"}
        </ul>
      </header>
    </div>
  );
}

export default App;
