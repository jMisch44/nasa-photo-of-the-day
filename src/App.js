import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";
import Photo from './Photo';
import Title from './Title';
import Explanation from "./Explanation";
import Date from "./Date";
import Copyright from "./Copyright";



function App() {

  const  [docTitle, setDocTitle] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [date, setDate] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [copyright, setCopyright] = useState(null);

  useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then( res=> {
  setDocTitle(res.data.title);
  setExplanation(res.data.explanation);
  setDate(res.data.date);
  setPhoto(res.data.url);
  setCopyright(res.data.copyright);
})
},[]);

  return (
    <div className="App">
      <Title title={docTitle} />
      <div className='main-content'>
        <div className='image'> 
          <Photo src={photo} />
        </div>
        <div className='image-info'>
          <Copyright copyright={copyright} />
          <Date date={date} />
          <Explanation explanation={explanation} />
        </div>
      </div>
    </div>
  );
}

export default App;
