import React from "react";

export default function FiltersElement(){

    const filters = ["Activity","Difficulty","Length","Suitability","More-filters"]
    const filterLinks = filters.map(item =>{
        return <a className={item}>{item} <i className="fa fa-angle-down"></i></a>
    })

    return(
        <div>
            {filterLinks}
        </div>
        
    )
}