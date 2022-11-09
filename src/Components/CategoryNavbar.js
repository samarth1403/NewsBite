import React from "react";
import { Link } from "react-router-dom";

const CategoryNavbar = () => {

    return (
      <div className="container" >
        <ul className="nav nav-tabs ">
          {/* <li className="nav-item" >
            <button className="nav-link" style={{color:'black'}} onClick={this.props.handleIndianClick} >
              Indian
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" style={{color:'black'}} onClick={this.props.handleAmericanClick} >
              American
            </button>
          </li> */}
          <li className="nav-item">
            <Link to="/indian" className="nav-link" style={{color:'black'}} >
            Indian
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/american" className="nav-link" style={{color:'black'}} >
            American
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/entertainment" className="nav-link" style={{color:'black'}} >
            entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/general" className="nav-link" style={{color:'black'}} >
            general
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/health" className="nav-link" style={{color:'black'}} >
            health
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/science" className="nav-link" style={{color:'black'}} >
            science
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/business" className="nav-link" style={{color:'black'}} >
            business
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sports" className="nav-link" style={{color:'black'}} >
            sports
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/technology" className="nav-link" style={{color:'black'}} >
            technology
            </Link>
          </li>
        </ul>
      </div>
    );
  
}
export default  CategoryNavbar