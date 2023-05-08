import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);
  const api_key = "35337b65c2364bb592cdc61f382c77b4";

  const getData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=35337b65c2364bb592cdc61f382c77b4"
    );
    const data = await response.json();
    console.log(data.articles);
    setNews(data.articles);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="container-main">
        {news.map((i) => {
          return (
            <div className="container-child">
              <a href={i.url} className="items">
                {i.title}
              </a>
              <p>{i.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
