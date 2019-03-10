import React from "react";

const News = props => {
  console.log(props.newsName);
  const newsContent = !props.news ? null : props.news.totalResults === 0 ? (
    <p>{props.newsName} has no recent news articles for this artist</p>
  ) : (
    props.news.articles.slice(0, 2).map(article => {
      // console.log("published at", article.publishedAt.split("T"));
      let date = article.publishedAt.split("T");
      let splitDate = date[0].split("-");
      let finalDate = splitDate.reverse().join(".");

      return (
        <div>
          <p>{article.title}</p>
          <p>{article.description}</p>
          <p>{finalDate}</p>
        </div>
      );
    })
  );

  return (
    <div>
      {/* <h4>{props.news.articles[0].source.name}</h4> */}
      {newsContent}
    </div>
  );
};

export default News;
