import React from "react"
import styled from "styled-components"
const Title=styled.h2`
  width: 100%;
  margin-top: 0%;
  margin-bottom: 0%;
`;

const ImageInfo=styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

const ImageOfDay=styled.img`
    width: 100%;
    padding: 2%;
    background-color: black;
`;
function AstroOfTheDay(props){
    console.log(props)
    return (
        <div className="astroContainer">
            <ImageOfDay src={props.astroData.hdurl} />
            <ImageInfo>
                
                    <div style={{backgroundColor:"#2a2a2a", padding:"1% 2%", width: "40%", display: "flex", flexWrap: "wrap"}}>  
                        <Title>{props.astroData.title}</Title>
                        <span style={{width:"100%"}}>{props.astroData.date}</span>
                        <span style={{width:"100%"}}>Image Credit: {props.astroData.copyright}</span>
                    </div>
                
            </ImageInfo>
            <p style={{width:"70%"}}>{props.astroData.explanation}</p>
        </div>
    )
}

export default AstroOfTheDay