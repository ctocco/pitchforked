import React from "react";
import "./news.css";

const News = props => {
  console.log(props);
  const newsContent = !props.news ? null : props.news.totalResults === 0 ? (
    <p>{props.newsName} has no recent news articles for this artist</p>
  ) : (
    props.news.articles.slice(0, 2).map(article => {
      // console.log("published at", article.publishedAt.split("T"));
      let date = article.publishedAt.split("T");
      let splitDate = date[0].split("-");
      let finalDate = splitDate.reverse().join(".");

      return (
        <ul className="text-left container p2">
          <div className="row">
            <div className="col-9" style={newsSectionStyle}>
              <h5 className="ml-3">
                <a href={article.url} target={article.url}>
                  {article.title}
                </a>
              </h5>
              <p className="ml-3" style={newsSectionStyle}>
                {finalDate}
              </p>
            </div>
            <div className="col-3" style={newsSectionStyle}>
              <img
                src={article.urlToImage}
                alt="news story of artist"
                style={imageStyle}
              />
            </div>
            {/* decided to take this out at the moment for styling reasons */}
            {/* <div className="row">
              <div className="col-12" />
              <li className="ml-4 p4">{article.description}</li>
            </div> */}
          </div>
        </ul>
      );
    })
  );

  return <div>{newsContent}</div>;
};

const newsSectionStyle = {
  marginBottom: 0,
  paddingBottom: 0
};

const imageStyle = {
  maxHeight: "85%",
  maxWidth: "85%",
  borderRadius: "5%"
};

export default News;
