import './App.css';

import React, { Component } from 'react'

import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes , Route } from 'react-router-dom';


export class App extends Component {
  page = 9;
  
  render() {
    return (
      
      <div>
        
        <Navbar/>
        {/* <div className='container'><CategoryNavbar/></div> */}
        <Routes>
        
            <Route exact path='/' element={<News  key="sports" pageSize={this.page} apiKey="686531ff838549f2ae9ed953de34b76f"category="sports"/>}/>
            <Route exact path='/indian'  element={<News key="indian" pageSize={this.page} apiKey="686531ff838549f2ae9ed953de34b76f" categoryCountry="in" />}/>
            <Route exact path='/american' element={<News key="american" pageSize={this.page} apiKey="686531ff838549f2ae9ed953de34b76f" categoryCountry="us"/>}/>
            <Route exact path='/entertainment'  element={<News key="entertainment" page={this.page} apiKey="686531ff838549f2ae9ed953de34b76f"category="entertainment"/>}/>
            <Route exact path='/general'  element={<News key="general"pageSize={this.page} apiKey="686531ff838549f2ae9ed953de34b76f"category="general"/>}/>
            <Route exact path='/health'  element={<News key="health"pageSize={this.page} apiKey="686531ff838549f2ae9ed953de34b76f"category="health"/>}/>
            <Route exact path='/science'  element={<News key="science" pageSize={this.page} apiKey="686531ff838549f2ae9ed953de34b76f"category="science"/>}/>
            <Route exact path='/business' element={<News  key="business" pageSize={this.page} apiKey="686531ff838549f2ae9ed953de34b76f"category="business"/>}/>
            <Route exact path='/sports' element={<News  key="sports" pageSize={this.page} apiKey="686531ff838549f2ae9ed953de34b76f"category="sports"/>}/>
            <Route exact path='/technology'  element={<News key="technology" pageSize={this.page} apiKey="686531ff838549f2ae9ed953de34b76f"category="technology"/>}/>

        </Routes>
      </div>
    )
  }
}

export default App

