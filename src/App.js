import './App.css';

import React,{useState} from 'react'

import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes , Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


 const App = () =>  {
  const page = 9;
  const apiKey = process.env.REACT_APP_NEWSBITE_API

  const [progress,setProgress] = useState(0);

  // state = {
  //   progress : 0
  // }

  // setProgress = (progress) =>{
  //   setState({progress : progress})
  // }
  

    
    return (
      
      <div>
       <div ><Navbar/></div> 
       

        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
        />

        
        <Routes>
            <Route exact path='/' element={<News setProgress={setProgress}   key="sports" pageSize={page} apiKey={apiKey} category="sports"/>}/>
            <Route exact path='/indian'  element={<News setProgress={setProgress}  key="indian" pageSize={page} apiKey={apiKey}  categoryCountry="in" />}/>
            <Route exact path='/american' element={<News setProgress={setProgress}  key="american" pageSize={page} apiKey={apiKey}  categoryCountry="us"/>}/>
            <Route exact path='/entertainment'  element={<News setProgress={setProgress}  key="entertainment" page={page} apiKey={apiKey} category="entertainment"/>}/>
            <Route exact path='/general'  element={<News setProgress={setProgress}  key="general"pageSize={page} apiKey={apiKey} category="general"/>}/>
            <Route exact path='/health'  element={<News setProgress={setProgress}  key="health"pageSize={page} apiKey={apiKey} category="health"/>}/>
            <Route exact path='/science'  element={<News setProgress={setProgress}  key="science" pageSize={page} apiKey={apiKey} category="science"/>}/>
            <Route exact path='/business' element={<News setProgress={setProgress}   key="business" pageSize={page} apiKey={apiKey} category="business"/>}/>
            <Route exact path='/sports' element={<News setProgress={setProgress}   key="sports" pageSize={page} apiKey={apiKey} category="sports"/>}/>
            <Route exact path='/technology'  element={<News setProgress={setProgress}  key="technology" pageSize={page} apiKey={apiKey} category="technology"/>}/>

        </Routes>
      </div>
    )
  }


export default App

