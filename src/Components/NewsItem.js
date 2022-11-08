import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl ,source} = this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
              {source}
            </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://english.cdn.zeenews.com/sites/default/files/2022/11/02/1111329-lunar-eclipse-pixabay.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small class="text-muted">
                By {this.props.author} on{" "}
                {new Date(this.props.publishedAt).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm d-flex justify-content-center btn-dark mx-5"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;