const url = "https://ronreiter-meme-generator.p.rapidapi.com/meme";
const url2 = "https://icanhazdadjoke.com/slack";
const url3 =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-03-25&sortBy=publishedAt&apiKey=35337b65c2364bb592cdc61f382c77b4";

/*
    fetch(url)
  .then((data) => data.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const ptag = document.getElementById("pTag");
    ptag.innerHTML = jokeText;
  });

  const promise = fetch(url3);
promise
  .then((data) => data.json())
  .then((resp) => {
    const authorName = "Jai Shri Ram";
    // const authorName = resp.articles.map((i) => i.author);
    const ptag = document.getElementById("pTag");
    ptag.innerHTML = authorName;
  });
*/

fetch(url2)
  .then((data) => data.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const ptag = document.getElementById("pTag");
    ptag.innerHTML = jokeText;
  });

const API_KEY = "BOcr581qOPwZbv4Wc1kUyzlgGBplZSqr7k0aGRy5LqxwcJENyPu7FnK1";
const API_URL = `https://api.pexels.com/v1/search?query=nature&per_page=10`;
fetch(API_URL, {
  headers: {
    Authorization: API_KEY,
  },
})
  .then((response) => {
    console.log(response);

    const dummy2 = "https://dummyimage.com/300.png/09f/fff";

    const dummy3 =
      "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg";
    const imgTag = document.getElementById("img");
    imgTag.src = dummy3;
  })
  .catch((error) => {
    console.log(error);
  });
