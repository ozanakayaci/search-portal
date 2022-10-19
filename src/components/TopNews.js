import React from "react";
import { useState, useEffect } from "react";

import "./TopNews.css";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function TopNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = (i) => {
    if (currentIndex >= data.length - 1) {
      return setCurrentIndex(0);
    } else if (currentIndex < 0) {
      return setCurrentIndex(
        data.length % 3 == 0 ? data.length - 3 : data.length - (data.length % 3)
      );
    }
    return setCurrentIndex(currentIndex + i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll(3);
      console.log(currentIndex);
    }, 100000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel">
      <button
        onClick={() => {
          carouselInfiniteScroll(-3);
        }}
      >
        ⇐
      </button>
      <div className="news">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="news-card"
              style={{
                transform: `translate(-${currentIndex * 108}%)`,
              }}
            >
              <img src="../../img/news.jpg" alt="" width="327" height="195" />
              <p>
                {item}A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
              </p>
              <div>1h ago · by Troy Corlson</div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          carouselInfiniteScroll(3);
        }}
      >
        ⇒
      </button>
    </div>
  );
}

export default TopNews;
