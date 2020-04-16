import React, {useState, useEffect} from "react";
import "./App.css";
import AstroOfTheDay from "./AstroOfTheDay"
import astroData from "./apod.json"
import RoverGallery from "./RoverGallery"
import axios from "axios"
const url = "https://api.nasa.gov/planetary/apod"
const key = "5QLiZdjGEJNCTMappVfsVecGhN1L5gggWZ4tnrSu"

function App() {
  const [data, setData]=useState([])
  useEffect(function(){
    axios.get(`${url}?api_key=${key}`)
    .then(function (response){
      setData(response.data)
    })
    .catch(function(error){
      console.log("error")
    })
  }, [])
  
  return (
    <div className="App">
      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        <h1>Astronomical Picture of the Day</h1>
        <AstroOfTheDay astroData={data} />
      </div>
    </div>
  );
}

export default App;



// Generate API Key

// Your API key for kristiangcorrea@live.com is:
// fLVwvlC8QaN4KIHIFdeabJD1w5y9FthVHOSP0lxv

// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=fLVwvlC8QaN4KIHIFdeabJD1w5y9FthVHOSP0lxv

// For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:
// Account Email: kristiangcorrea@live.com
// Account ID: 8c445412-f2ed-4d0b-bb2e-09e0c0689211
