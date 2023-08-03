import React from "react"
import "../App.css"

export default function Header(){

//     const [dropdownIcon,setDropdownIcon] = React.useState([
//         {icon : "fa fa-angle-down",field : "saved"},
//         {icon : "fa fa-angle-down",field : "shop"},
// ])

  

//     function changeDrodownIcon(field) {
//         setDropdownIcon(prevValue => {
//             return prevValue.map((item) => {
//                 return item.field == field ? {...item, icon: "fa fa-angle-down" ? "fa fa-angle-up" : "fa fa-angle-down"} : item
//             })
//         })
//     }

    const [dropdownIcon,setDropdownIcon] = React.useState("fa fa-angle-down")
    const [dropdownIconShop,setDropdownIconShop] = React.useState("fa fa-angle-down")

    function changeDrodownIcon(){
        setDropdownIcon("fa fa-angle-up")
    }

    function changeDrodownIconShop(){
        setDropdownIconShop("fa fa-angle-up")
    }

    function mouseLeaveDropdown(){
        setDropdownIconShop("fa fa-angle-down")
        setDropdownIcon("fa fa-angle-down")
    }

    return(
        <nav className="navbar-header">
            <div className="navbar-sec1">
                <img src="./images/AllTrails.png" width="140px" height="70px"/>
                
                <p><a href="www.google.com" className="explore-link">Explore</a></p>
                <p><a href="www.google.com" className="community-link">Community</a></p>
                <div onMouseOver={changeDrodownIcon}  onMouseLeave={mouseLeaveDropdown} className="dropdown">
                    <p>Saved<span className="saved-drodown-icon"><i className={dropdownIcon}></i></span></p>
                    <div className="dropdown-content">
                        
                            <a href="www.google.com">My favourites</a>
                            <a href="www.google.com">My maps</a>
                            <a href="www.google.com">Lists</a>
                            <a href="www.google.com">Activities</a>
                            <a href="www.google.com">Completed</a>
                            <a href="www.google.com">Create Map</a>
                        
                    </div>
                </div>
                <div className="shop-dropdown" onMouseOver={changeDrodownIconShop} onMouseLeave={mouseLeaveDropdown}>
                    <p>Shop<span className="shop-drodown-icon"><i className={dropdownIconShop}></i></span></p>
                    <div className="shop-dropdown-content">
                        <a>AllTrails Gear</a>
                        <a>Give AllTrails+</a>
                    </div>
                </div>
                
            </div>
            <div className="navbar-sec2">
                <a href="www.google.com" className="help-link">Help</a>
                <a href="www.google.com" className="alltrails-link">Try AllTrails+ for free</a>
                <a href="www.google.com" className="login-link">Log in</a>
            </div>
        </nav>
    )
}