import React from "react"
import photos from "./photos.json"
console.log(photos.photos)
function RoverGallery(){
    return (
        <div className="RoverGallery">
            {
                photos.photos.slice(0,18).map(function (item){
                    console.log(item)
                    return (
                        <div className="roverItem">
                            <img src={item.img_src} />  
                            
                        </div>
                    )
                })
            }
            
            
        </div>
    )
}
export default RoverGallery