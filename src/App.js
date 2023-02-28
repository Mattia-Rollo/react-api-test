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
            return [...prevCards, {...data, ...dataUser,id: cards.length + 1}];
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
        <h1>Doppia chiamata Api Con Fetch + Async Await + trycatch</h1>
      <header className="App-header">

        
        <div className="container">
          <div className="row row-cols-4 g-2">
            
            {cards.length
              ? cards.map((card) => (
                <Card key={card.id} card={card} />
                ))
                  : (
                  <>
                  <div className="col">
                    <div className="card bg-dark" aria-hidden="true">
                      <div id="skeleton" className="card-img-top"></div>
                      {/* <img src="..." className="card-img-top" alt="..." /> */}
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder rounded-1 col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder rounded-1 col-12"></span>
                          {/* <span className="placeholder col-4"></span> */}
                          <span className="placeholder rounded-1 col-10"></span>
                          {/* <span className="placeholder col-6"></span> */}
                          <span className="placeholder rounded-1 col-8"></span>
                        </p>
                        {/* <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-dark" aria-hidden="true">
                      <div id="skeleton" className="card-img-top"></div>
                      {/* <img src="..." className="card-img-top" alt="..." /> */}
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
                        {/* <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-dark" aria-hidden="true">
                      <div id="skeleton" className="card-img-top"></div>
                      {/* <img src="..." className="card-img-top" alt="..." /> */}
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
                        {/* <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a> */}
                      </div>
                    </div>
                  </div>
                  </>
              )}
          </div>
        </div>
        <button onClick={getMovie} className="btn btn-lg btn-primary m-3">premi</button>
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
      <div className="col">
        <div className="card bg-dark bg-gradient">
          <h3 className="p-2">{card.title}</h3>
          <div className="text-secondary p-2">Autor: {card.name}</div>
          {/* <div>card id: {card.id}</div> */}
          <div className="card-body">{card.body}</div>
        </div>
      </div>
    </>
  );
}

export default App;
