import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  // const img = "https://image.tmdb.org/t/p/w500/";
  const id = 1;
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      // .then((res) => res.json())
      // .then((data) => console.log("post:" + data.body, "userId:" + data.userId))
      

      // console.log(response.json());
      // const response2 = await fetch(
      //   `https://jsonplaceholder.typicode.com/users/${response.data.userId}`
      // )
      // .then((res) => {res.json(); console.log(res)})
      // .then((data) => console.log("User: " + data))
      // .catch(error => console.error(error));
      // console.log(like);

      if (!response.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
          const data = await response.json();
          const resUser = await fetch(
          `https://jsonplaceholder.typicode.com/users/${data.userId}`
          )

        if(!resUser.ok){
          throw new Error("Data coud not be fetched!");
        }else{
          const dataUser = await resUser.json();

          console.log(data, dataUser);
          setCards((prevCards) => {
            return [...prevCards, {...data, id: cards.length + 1, dataUser}];
          });
          console.log(cards)
        }
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
                <Card key={card.id} card={card} />
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
      {/* <img
        src={"https://image.tmdb.org/t/p/w500/" + card.backdrop_path}
        alt="ok"
      /> */}
      <h3>{card.title}</h3>
      <h3>{card.dataUser.name}</h3>
      <div>card id: {card.id}</div>
      <div>{card.overview}</div>
    </>
  );
}

export default App;
