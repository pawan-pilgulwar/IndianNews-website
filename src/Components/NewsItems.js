import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, date, author, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://www.reuters.com/resizer/v2/KMBRIDZYUBPFZGDZESLFUQ6OSQ.jpg?auth=5325377f15d115a4539da98f16da339bc7e115e710e5e9fe08376edfa2caa173&height=1005&width=1920&quality=80&smart=true"
          }
          className="card-img-top"
          alt="..."
        />npm
        <div className="card-body">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: "1" }}
          >
            {source}
          </span>
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            By {author} on {new Date(date).toGMTString()}
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
