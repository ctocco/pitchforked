import React from "react";

const News = props => {
  const newsContent = !props.news ? null : props.news.totalResults === 0 ? (
    <p>There are currently no upcoming news articles for this artist</p>
  ) : (
    props.news.articles.slice(0, 2).map(article => {
      // console.log("published at", article.publishedAt.split("T"));
      let date = article.publishedAt.split("T");
      let splitDate = date[0].split("-");
      let finalDate = splitDate.reverse().join(".");

      return (
        <div>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p>{finalDate}</p>
        </div>
      );
    })
  );

  return <div>{newsContent}</div>;
};

export default News;
