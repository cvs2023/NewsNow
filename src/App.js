import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
const dummyObj = [
  {
    source: {
      id: null,
      name: "News Now",
    },
    author: null,
    title: "Welcome to Latest Crypto News Now",
    description: "Please Wait Loading...",
    url: "https://www.ndtv.com/india-news/sharad-pawar-says-he-has-decided-to-step-down-as-ncp-president-3997360",
    urlToImage:
      "https://c.ndtvimg.com/2023-05/6ekeij6_sharad-pawar_625x300_02_May_23.jpg",
    publishedAt: "2023-05-02T08:22:00Z",
    content: "",
  },
];
function App() {
  const [news, setNews] = useState(dummyObj);
  const url2 =
    "https://newsdata.io/api/1/news?apikey=pub_21813bb2c3af64c5c57f1b2051b6baaed22e4&q=crypto&language=en";

  const getData = async () => {
    const response = await fetch(url2);
    const data = await response.json();
    // console.log(data.results);
    setNews(data.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="container-main">
        {news.map((i, index) => {
          return (
            <div key={index} className="container-child">
              <a href={i.link} className="items">
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

/*
  const cryptoApi = "pub_21813bb2c3af64c5c57f1b2051b6baaed22e4";

const url1 =
    "https://newsdata.io/api/1/archive?apikey=pub_21813bb2c3af64c5c57f1b2051b6baaed22e4&q=pizza&language=en&from_date=2023-01-19&to_date=2023-01-25";
*/
