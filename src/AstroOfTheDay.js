import React from "react"


function AstroOfTheDay(props){
    console.log(props)
    return (
        <div className="astroContainer">
            <img style={{width:"100%"}} src={props.astroData.hdurl} />
            <h2 style={{width:"100%", marginBottom:"0%"}}>{props.astroData.title}</h2>
            <span style={{width:"100%"}}>{props.astroData.date}</span>
            <span style={{width:"100%"}}>Image Credit: {props.astroData.copyright}</span>
            <p style={{width:"70%"}}>{props.astroData.explanation}</p>
        </div>
    )
}

export default AstroOfTheDay