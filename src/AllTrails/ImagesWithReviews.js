import React from "react";

export default function ImagesWithReviews(){
    
    const styles = {
        "color" : "green",
        "margin-top" : "30px",
        "margin-right" : "5px"
        
    }
    const arrayList = [1,2,3]
    const ImagesWithReviewsElement = arrayList.map(item => {
        return  <div>
        <div className="image-name-time-container">
            <img src="./images/profileUser.png" width="80px" height="60px"/>
            <div className="name-time">
                <h4>Name</h4>
                <p>4 days ago</p>
            </div>
        </div>
        <img className="ITD-image" src="./images/image1.jpg" height="220px" width="331px"/>
        
        <div className="review-1">
            <h3>Wrote a trail review</h3>
            <a href="www.google.com">Devil's Bridge Trail</a><span> . Coconico National Forest</span>
            <div className="review-2">
                <i className="fa fa-star" style={styles}></i><i className="fa fa-star" style={styles}></i><i className="fa fa-star" style={styles}></i><i className="fa fa-star" style={styles}></i>
                <p>Damp trail. Proper shoes a must</p>
            </div>
        </div>
</div>
    })
   
    return(
        <div className="ImagesWithReviewsElement-container">
            {ImagesWithReviewsElement}
            
       </div>
    )
}