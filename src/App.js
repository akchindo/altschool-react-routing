import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import AppRouting from "./AppRouting";

// const newsItems = [
//   {
//     id: "1",
//     title: "BBC News",
//     url: "https://www.bbc.com/news",
//     description: "Latest news from BBC",
//   },
//   {
//     id: "2",
//     title: "CNN News",
//     url: "https://www.cnn.com/",
//     description: "Latest news from CNN",
//   },
//   {
//     id: "3",
//     title: " Google News",
//     url: "https://news.google.com/",
//     description: "Latest news from Google",
//   },
//   {
//     id: "4",
//     title: " TechCrunch",
//     url: "https://techcrunch.com/",
//     description: "Latest news TechCrunch",
//   },
// ];

const App = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const newsItems = [
      {
        id: "1",
        title: "BBC News",
        url: "https://www.bbc.com/news",
        description: "Latest news from BBC",
      },
      {
        id: "2",
        title: "CNN News",
        url: "https://www.cnn.com/",
        description: "Latest news from CNN",
      },
      {
        id: "3",
        title: " Google News",
        url: "https://news.google.com/",
        description: "Latest news from Google",
      },
      {
        id: "4",
        title: " TechCrunch",
        url: "https://techcrunch.com/",
        description: "Latest news TechCrunch",
      },
    ];
    const item = newsItems[currentPosition];
    setListItems(newsItems);
    setNews(item);
    setLoading(false);
  }, [currentPosition]);

  const handleNext = (e) => {
    e.preventDefault();
    const length = listItems.length
    const count = length -1
    if (currentPosition < count) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
    <div>
      {/* <AppRouting /> */}
      <section className='news'>
        {loading ? (
          <div>loading</div>
        ) : (
          <div className='news-item' key={news.id}>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url}>{news.url}</a>
          </div>
        )}
      </section>
      <div className='paginate news'>
        <button className='navigate  prev' onClick={handlePrevious}>
          Prev
        </button>
        <button className='navigate  next' onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
