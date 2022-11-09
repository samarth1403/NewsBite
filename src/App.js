import './App.css';

import React, { Component } from 'react'

import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes , Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export class App extends Component {
  page = 9;
  apiKey = process.env.REACT_APP_NEWSBITE_API

  state = {
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState({progress : progress})
  }
  
  render() {
    
    return (
      
      <div>
        
        <Navbar/>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
        />

        
        <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress}   key="sports" pageSize={this.page} apiKey={this.apiKey} category="sports"/>}/>
            <Route exact path='/indian'  element={<News setProgress={this.setProgress}  key="indian" pageSize={this.page} apiKey={this.apiKey}  categoryCountry="in" />}/>
            <Route exact path='/american' element={<News setProgress={this.setProgress}  key="american" pageSize={this.page} apiKey={this.apiKey}  categoryCountry="us"/>}/>
            <Route exact path='/entertainment'  element={<News setProgress={this.setProgress}  key="entertainment" page={this.page} apiKey={this.apiKey} category="entertainment"/>}/>
            <Route exact path='/general'  element={<News setProgress={this.setProgress}  key="general"pageSize={this.page} apiKey={this.apiKey} category="general"/>}/>
            <Route exact path='/health'  element={<News setProgress={this.setProgress}  key="health"pageSize={this.page} apiKey={this.apiKey} category="health"/>}/>
            <Route exact path='/science'  element={<News setProgress={this.setProgress}  key="science" pageSize={this.page} apiKey={this.apiKey} category="science"/>}/>
            <Route exact path='/business' element={<News setProgress={this.setProgress}   key="business" pageSize={this.page} apiKey={this.apiKey} category="business"/>}/>
            <Route exact path='/sports' element={<News setProgress={this.setProgress}   key="sports" pageSize={this.page} apiKey={this.apiKey} category="sports"/>}/>
            <Route exact path='/technology'  element={<News setProgress={this.setProgress}  key="technology" pageSize={this.page} apiKey={this.apiKey} category="technology"/>}/>

        </Routes>
      </div>
    )
  }
}

export default App

