import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";
import Photo from './Photo';
import Title from './Title';




function App() {

  const  [docTitle, setDocTitle] = useState(null);
  useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then( res=> {
  setDocTitle(res.data.title);
})
},[]);
  return (
    <div className="App">
      <Title title={docTitle} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {/* <div>IMG</div>
      <div>explanation(date,explanation,name</div> */}
    </div>
  );
}

export default App;
