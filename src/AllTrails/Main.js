import React,{useRef, useEffect} from "react";
import TrailsData from "./TrailsData.js";
import KeyWordsElement from "./KeyWordsElement.js";
import FiltersElement from "./FiltersElement.js";
import IndividualTrailDetails from "./IndividualTrailDetails.js";
import ImageScrollElement from "./ImageScrollElement.js";
import ImagesWithReviews from "./ImagesWithReviews.js";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function Main(){

    const [trailsData, setTrailsData] = React.useState(TrailsData.data.trails)
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = React.useState(true)
    const [ShowContent,setShowContent] = React.useState("Show more")
    const [contentBodyClass, setContentBodyClass] = React.useState("content-body-short")
    
    
    function onShowContentClick(){
        setShowContent(prevValue => {
            return prevValue == "Show more" ? "Show less" : "Show more"
        })

        setContentBodyClass(preValue => {
            return preValue == "content-body" ? "content-body-short" : "content-body"
        })
    }

    const starElement = <div>
                            <FontAwesomeIcon icon={faStar} className="icon-faStar"/>
                            <FontAwesomeIcon icon={faStar} className="icon-faStar"/>
                            <FontAwesomeIcon icon={faStar} className="icon-faStar"/>
                            <FontAwesomeIcon icon={faStar} className="icon-faStar"/> 
                        </div>

useEffect(() => {
    
    if (elementRef.current != null) {
      
      elementRef.current.focus();
    }
  }, []);

    return(
        <main className="main">
            <div className="main-header">
                <p>United States of America</p>
                <div className="search-container">  
                    <input className="search-box" placeholder="Enter a city, park or trail name"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div> 
            </div>

            <div>
                <ImageScrollElement/>
            </div>

            {/* <button disabled={arrowDisable} className="arrow-container-right" onClick={()=> scroll(elementRef.current,25,100, -10)}>
                <FontAwesomeIcon icon={faArrowRight} className="icon-faArrowRight"/>
            </button>
            <button disabled={arrowDisable} className="arrow-container-left" onClick={()=> scroll(elementRef.current,25,100, +10)}>
                <FontAwesomeIcon icon={faArrowLeft} className="icon-faArrowLeft"/> 
            </button> */}

            <div className={contentBodyClass}>
                <h1>Best trails in United States of America</h1>
                <div className="rating">{starElement} 17,965,059 Reviews</div>
                <p className="typography-para">Ready to check out the best trails in the United States of America for hiking, mountain biking, climbing or other outdoor activities? AllTrails has 89,339 hiking trails, mountain biking routes, backpacking trips and more. Discover hand-curated trail maps, along with reviews and photos from nature lovers like you. No matter what you're looking for, you can find a diverse range of the best hiking trails in the United States of America to suit your needs. Explore one of 42,776 family-friendly hikes for a sunny weekend. Check out 8,146 wheelchair-friendly trails with helpful accessibility guidance. Plan your next outdoor adventure to one of 65,373 routes with waterfalls or scenic views.</p>
                <KeyWordsElement/>
            
            </div>
            <a className="showContentLink" onClick={onShowContentClick}>{ShowContent}</a>
            <div>
                <img className="map-image" src="./images/AllTrailsMap.png" height="240px" width=""/>
            </div>
            <div className="buttons-container">
                <button className="directions-button"><i className="fa fa-long-arrow-right"></i> Directions</button>
                <button className="share-button"><i className="fa fa-share"></i> Share</button>
            </div>
            <div className="filters-container">
                <FiltersElement/>
            </div>

            <div>
                <IndividualTrailDetails/>
            </div>
            <div className="show-results">
                <button className="showMoreTrails-button">Show more trails</button>
                <h5 className="showing-results">Showing results 1-10 of 89298</h5>
            </div>

            <div>
                <h1>Top states in United States of America</h1>
                <div>
                    <ImageScrollElement/>
                </div>
                <div>
                    <ImageScrollElement/>
                </div>
            </div>

            <div>
                <h1>Top Parks in United States of America</h1>
                <div>
                    <ImageScrollElement/>
                </div>
                <div>
                    <ImageScrollElement/>
                </div>
            </div>

            <div>
                <h1>Top Cities in United States of America</h1>
                <div>
                    <ImageScrollElement/>
                </div>
                <div>
                    <ImageScrollElement/>
                </div>
            </div>
            <div className="links-container">
                <div className="links-list">
                    <h2>Activity Type</h2>
                    <a href="www.google.com">Backpacking</a>
                    <a href="www.google.com">Bike touring</a>
                    <a href="www.google.com">Bird watching</a>
                </div>
                    
                <div className="links-list">
                <h2>Attractions</h2>
                    <a href="www.google.com">Beach</a>
                    <a href="www.google.com">Cave</a>
                    <a href="www.google.com">Challenging</a>
                </div>

                <div className="links-list">
                <h2>Suitability</h2>
                    <a href="www.google.com">Dog friendly</a>
                    <a href="www.google.com">Dogs on leash</a>
                </div>
            </div>

            <div className="freq-asked-quest">
                <h2>Frequently asked trail questions about United States of America</h2>
                <h3>What national parks in United States of America have hiking trails?</h3>
                <p>Hikers on AllTrails.com recommend several popular national parks in United States of America. Acadia National Park is home to 244 hiking trails with an average 4.6 star rating from 101,355 community reviews. Arches National Park has 47 hiking trails with an average 4.4 star rating from 56,705 community reviews. Badlands National Park has 16 hiking trails with an average 4.4 star rating from 11,306 community reviews.</p>
            </div>

            <div>
                <h1>Recent reviews of trails in United States of America</h1>
                <ImagesWithReviews/>
            </div>

            
            
        </main>
        
    )
}
