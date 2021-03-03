import React, { useEffect, useState } from "react";
import News from "../News";

const Topheadline = () => {
  const [article, setArticel] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3a7c4ef748654e679a52fbed9fc9d5de"
    )
      .then((res) => res.json())
      .then((data) => setArticel(data.articles));
  }, []);
  return (
    <div>
      <h2>Topheadline:{article.length}</h2>
      {article.map((content) => (
        <News news={content} />
      ))}
    </div>
  );
};

export default Topheadline;
