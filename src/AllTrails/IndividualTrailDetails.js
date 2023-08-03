import React from "react";
import TrailsData from "./TrailsData";

export default function IndividualTrailDetails(){
    
    const styles = {
        "text-decoration" : "underline"
    }
    const borderStyle = {
        "border-top" : "1px solid #ccc"
    }
    const TrailElements = TrailsData.data.trails.map(item => {
        return (
            <div className="ITD-container">
                <div>
                    <img src={item.url} className="ITD-image"/>
                </div>
                <div className="ITD-info">
                    <p className="ITD-para">{item.difficultyLevel} . <i className="fa fa-star"></i>{item.reviews.rating} ({item.reviews.reviewCount})</p>
                    <h2 className="ITD-trailName">{item.name}</h2>
                    <h5 className="ITD-geography">{item.geography}</h5>
                    <h4 className="ITD-otherStats">Length : {item.otherStats.length} . Est. {item.otherStats.estimatedTime}</h4>
                    <p className="ITD-para">{item.Description}... <span style={styles}>Show more</span></p>
                </div>
            </div>
        )
    })
    return(
        <div style={borderStyle}>
            <h2>Top trails (89298)</h2>
            {TrailElements}
        </div>
    )
}