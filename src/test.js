import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
const dummyObj = [
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      "Sharad Pawar Quits As NCP Chief Amid Speculation Over Nephew Ajit Pawar - NDTV",
    description:
      "Senior Maharashtra politician Sharad Pawar has stepped down as president of the Nationalist Congress Party (NCP). There has been no announcement yet on who will succeed him as party boss.",
    url: "https://www.ndtv.com/india-news/sharad-pawar-says-he-has-decided-to-step-down-as-ncp-president-3997360",
    urlToImage:
      "https://c.ndtvimg.com/2023-05/6ekeij6_sharad-pawar_625x300_02_May_23.jpg",
    publishedAt: "2023-05-02T08:22:00Z",
    content:
      "Sharad Pawar also announced a panel of senior party leaders to draw a future course of action.\r\nNew Delhi: Senior Maharashtra politician Sharad Pawar today announced that he has stepped down as presi… [+3969 chars]",
  },
];
function App() {
  const [news, setNews] = useState(dummyObj);

  useEffect(() => {
    const apiKey = "35337b65c2364bb592cdc61f382c77b4";
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    const fetchNews = async () => {
      try {
        const response = await axios.get(url);
        // const data = await response.json();
        console.log(response);
        console.log(" data kidr hai ");
        // console.log(data.articles);
        setNews(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://newsapi.org/v2/top-headlines?country=in&apiKey=35337b65c2364bb592cdc61f382c77b4"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setNews(data.articles));
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://newsapi.org/v2/top-headlines?country=in&apiKey=35337b65c2364bb592cdc61f382c77b4"
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setNews(data.articles);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="App">
      <div className="container-main">
        {news.map((i, index) => {
          return (
            <div key={index} className="container-child">
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
