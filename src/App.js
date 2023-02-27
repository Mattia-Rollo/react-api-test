import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const img = "https://image.tmdb.org/t/p/w500/";
  const getMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/550?api_key=8ace785dd1f96b68334521629f5dadaf&language=it"
      );
      // .then((res) => console.log(res))
      // .then((data) => console.log(data));
      // console.log(like);
      if (!response.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        const data = await response.json();
        console.log(data);
        setCards((prevCards) => {
          return [...prevCards, { ...data, id: cards.length }];
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
          Learn React {cards.length}
        </a>
        <button onClick={getMovie}>premi</button>
        <ul>
          {cards
            ? cards.map((card) => (
                <>
                  {/* <li key={card.id}>
                    {Object.entries(item).map(
                    ([key, value]) => `${key}: ${value}`
                  )}
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + card.backdrop_path
                      }
                      alt="ok"
                    />
                    <div>{card.overview}</div>
                    <div>{card.Actors}</div>
                  </li> */}
                  <Card key={card.id} card={card} />
                </>
              ))
            : "no item"}
        </ul>
      </header>
    </div>
  );
}

function Card({ card }) {
  return (
    <>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + card.backdrop_path}
        alt="ok"
      />
      <h3>{card.title}</h3>
      <div>{card.overview}</div>
    </>
  );
}

export default App;
