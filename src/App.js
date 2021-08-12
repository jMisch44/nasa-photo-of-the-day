import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";
import Photo from './components/Photo';
import Title from './components/Title';
import Explanation from "./components/Explanation";
import Date from "./components/Date";
import Copyright from "./components/Copyright";



function App() {

  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then( res=> {
    setNasaData(res.data);
}).catch(err => {
  console.error(err);
})
},[]);

  return (
    <div className="App">
      <Title title={nasaData.title} />
      <div className='main-content'>
        <div className='image'> 
          <Photo photo={nasaData.url} />
        </div>
        <div className='image-info'>
          <Copyright copyright={nasaData.copyright} />
          <Date date={nasaData.date} />
          <Explanation explanation={nasaData.explanation} />
        </div>
      </div>
    </div>
  );
}

export default App;
