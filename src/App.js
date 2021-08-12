import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";
import Photo from './components/mainContent/Photo';
import Title from './components/Header/Title';
import Explanation from "./components/mainContent/Explanation";
import Date from "./components/mainContent/Date";
import Copyright from "./components/mainContent/Copyright";
import theme from "./components/theme";
import styled from "styled-components";
import { StyledMainContent } from "./components/mainContent/StyledMainContent";
import { StyledPhotoInfo } from "./components/mainContent/StyledPhotoInfo";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;
  color: ${pr => pr.theme.black};
  
`


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
    <StyledApp className="App">
      <div>
        <Title title={nasaData.title} />
      </div>
        <StyledMainContent>
          <Photo photo={nasaData.url} />
          <StyledPhotoInfo>
            <Explanation explanation={nasaData.explanation} />
            <Date date={nasaData.date} /> 
            <Copyright copyright={nasaData.copyright} />
          </StyledPhotoInfo>
        </StyledMainContent>
    </StyledApp>
  );
}

export default App;
