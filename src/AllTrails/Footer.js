import React from "react";

export default function Footer(){
    
    const styles = {
        "color" : "white",
        "margin-left" : "15px"
    }
    const exploreLinks = ["Countries","Regions","Cities","Parks","Trails"].map(item =>{
        return <a href="www.google.com" className="footer-links">{item}</a>
    })
    const mapLinks = ["My maps","Create map","Print maps","Route Converter"].map(item =>{
        return <a href="www.google.com" className="footer-links">{item}</a>
    })
    const companyLinks = ["About","Jobs","Press"].map(item =>{
        return <a href="www.google.com" className="footer-links">{item}</a>
    })
    const communityLinks = ["Support","Members","Give AllTrails+","AllTrails Gear"].map(item =>{
        return <a href="www.google.com" className="footer-links">{item}</a>
    })
    
    return(
        <div className="Footer-container">
            <div>
                <img src="./images/AllTrails.png"  height="70px" width="150px" />
            </div>
            <div className="footerLinks-container">
                <div>
                    <h2 style={styles}>Explore</h2>
                    {exploreLinks}
                </div>
                <div>
                    <h2 style={styles}>Maps</h2>
                    {mapLinks}
                </div>
                <div>
                    <h2 style={styles}>Company</h2>
                    {companyLinks}
                </div>
                <div>
                    <h2 style={styles}>Community</h2>
                    {communityLinks}
                </div>
            </div>

            <div className="footer2-container">
                <div>
                    <h2 style={styles}>An app for the outdoors</h2>
                    <button className="footer-buttons">Download</button><button className="footer-buttons">Google Play</button>
                </div>
                
            </div>
            <div>
                <p style={styles}>2023 AllTrails, LLC All Rights Reserved • <a>Privacy Policy</a> • <a>Terms</a> • <a>Cookie Policy</a></p>
            </div>
        </div>
    )
}