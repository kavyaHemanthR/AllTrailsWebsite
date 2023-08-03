import React from "react";
import TrailsData from "./TrailsData.js";

export default function ImageScrollElement(){
    
    const ImageScrollElement = TrailsData.data.trails.map(item =>{
        return <div className="ISE-container">
                    <a href="www.google.com">
            
                        <img key={item.id} 
                        src={item.url} 
                        height="220px" 
                        width="331px"
                        className="trail-image"/>
                    </a>
                    <div className="image-bottom">{item.geography}</div>
                </div>
    })

    return(
        <div className="image-container">
            
            {ImageScrollElement}
        </div>
    )
}