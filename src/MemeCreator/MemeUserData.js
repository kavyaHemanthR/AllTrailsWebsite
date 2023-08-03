import React from "react";
import memesData from "./memesData";

export default function MemeUserData(){
    
    const [memeImage,setMemeImage] = React.useState("");
    
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(memesArray[randomNumber].url);
        
         setMemeImage(memesArray[randomNumber].url);

    }
    return(
        <main>
            <div className="meme-userdata">
                <input className="meme-data-input" type="text"/>
                <input className="meme-data-input" type="text"/>
                <button onClick={getMemeImage} className="meme-data-button">Get a new Meme Image</button>
            </div>
            <img src={memeImage} width="500px"/>
        </main>
    )
}