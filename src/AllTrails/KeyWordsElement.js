import React from "react";
import keyWordsData from "./KeyWordsData"


export default function KeyWordsElement(){
    
    const keyElements = keyWordsData.Data.KeyWords.map(item => {
        return <a 
                    href="www.google.com" 
                    key={item}
                    className ="keywords-style" >
                        <span>{item}</span>
                        
                </a>
    })
    
    return(
        <div>
            
            {keyElements}
        </div>
    )
}