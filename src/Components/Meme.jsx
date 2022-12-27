import { useState } from "react"
import memesData from "../memesData"
/**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

function Meme(){
    const [meme, setMeme] = useState(
            {
                topText: "",
                topBottom: "",
                randomImage: "http://i.imgflip.com/1bij.jpg",
            }
        )
    const [allMemeImages, setAllMemesImages] = useState(memesData)
    // const data = memesData
    
    const getMemeImage = () => {
        const randomImageIndex = Math.floor(Math.random() * 99)
        console.log(randomImageIndex)
        // memesData.data.memes[randomImageIndex].url)
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                randomImage: allMemeImages.data.memes[randomImageIndex].url
            }
        })
    }   

    return (
        <div>
        <div className="form">
            <div className="inputs--">
                <input placeholder="Top text"/>
                <input placeholder="Bottom text"/>
            </div>
            <button onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <div className="meme--box">
            <img className="meme--image" src={meme.randomImage}/>
            <h2 className="meme--text top">top ttext one top</h2>
            <h2 className="meme--text bottom">bottom one bottom</h2>
        </div>
        </div>
        )
        
}

export default Meme
