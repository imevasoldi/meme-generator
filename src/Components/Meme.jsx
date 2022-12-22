import { useState } from "react"
import memesData from "../memesData"

function Meme(){
    const [memeImage, setMemeImage] = useState("")
    const data = memesData
    
    const getMemeImage = () => {
        const randomImageIndex = Math.floor(Math.random() * 99)
        console.log(randomImageIndex)
        setMemeImage(memesData.data.memes[randomImageIndex].url)
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
        {/* <img className="meme--image" src={memesData.data.memes[randomImageIndex].url}/> */}
        <img className="meme--image" src={memeImage}/>
        </div>
        )
        
}

export default Meme
