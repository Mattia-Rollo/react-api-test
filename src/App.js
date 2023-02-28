import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.css';
// import '/node_modules/bootstrap/dist/js/bootstrap.bundle';

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
            return [...prevCards, {...data,  ...dataUser,id: cards.length + 1}];
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
       
        <button onClick={getMovie} className="btn btn-lg btn-primary m-3">premi</button>
        <div className="container">
          <div className="row row-cols-4 g-2">
            {/* <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div> */}
            {cards
              ? cards.map((card) => (
                <Card key={card.id} card={card} />
                ))
                : "no item"}
          </div>
        </div>
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
      <div className="col bg-gradient">
        <h3 >{card.title}</h3>
        <h5 className="text-secondary">Autor: {card.name}</h5>
        {/* <div>card id: {card.id}</div> */}
        <p>{card.body}</p>
      </div>
    </>
  );
}

export default App;
