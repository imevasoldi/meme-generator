import memesData from "../memesData"

function Meme(){
    const data = memesData
    // console.log(data.data.memes)
    const randomImageIndex = Math.floor(Math.random() * 99)
    console.log(randomImageIndex)
    return (
        <div>
        <div className="form">
            <div className="inputs--">
                <input placeholder="Top text"/>
                <input placeholder="Bottom text"/>
            </div>
            <button>Get a new meme image 🖼</button>
        </div>
        <img className="meme--image" src={memesData.data.memes[randomImageIndex].url}/>
        </div>
        )
        
}

export default Meme