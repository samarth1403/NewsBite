import React from "react";

const NewsItems = (props) => {

    let { title, description, imageUrl, newsUrl ,source} = props;
    return (
      <div>
        <div className="card">
          <div style={{display:'flex',
                       justifyContent : 'flex-end',
                       position:'absolute',
                       right:'0'}}>
          <span className="badge rounded-pill bg-danger" >
              {source}
            </span>
          </div>
        
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
              <small className="text-muted">
                By {props.author} on{" "}
                {new Date(props.publishedAt).toGMTString()}
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

export default NewsItems;
