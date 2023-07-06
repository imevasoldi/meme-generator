import { useState, useEffect } from "react"
import memesData from "../memesData"
import { useQuery, gql } from "@apollo/client";


    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

function Meme(){
    const [meme, setMeme] = useState(
            {
                topText: "",
                bottomText: "",
                randomImage: "http://i.imgflip.com/1bij.jpg",
            }
        )
    const [allMemes, setAllMemes] = useState([])
    
    const USERS = gql`
query {
    users {
      _id
      email
      firstName
      lastName
    }
  }
`
//     const USERS = gql`
// query {
//     advisors {
//         contactPhoneNumber
//       }
//   }
// `


    const { loading, error, data } = useQuery(USERS)
    console.log(data);

    // console.log(meme)

    const getMemeImage = () => {
        const randomImageIndex = Math.floor(Math.random() * 99)
        console.log(randomImageIndex)
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                randomImage: allMemes[randomImageIndex].url
            }
        })
    }
    
    

    useEffect(()=> {
        // fetch("https://api.imgflip.com/get_memes")
        // fetch("https://hallowed-front-sandbox.up.railway.app/")
        // fetch("https://hallowed-front-sandbox.up.railway.app/", {
        //     method: 'GET',
        //     mode: 'no-cors',
        // })
        // .then(res => res.json())
        // .then(data => setAllMemes(data.data.memes))
        // const response = await fetch(`https://hallowed-front-sandbox.up.railway.app/`,{
        //     fetch(`https://hallowed-front-sandbox.up.railway.app/`,{
        //         method: 'POST',
        //         // body: USERS,
        //         // body: JSON.stringify({ USERS })
        //         // body: JSON.stringify({ USERS })
        //         body: USERS,
        //     })
        // .then(res => res.json())
        // .then(data => console.log(data))
       
        // .catch(error => {
        //     console.error('Error:', error);
        //     throw new Error('Failed to fetch user data from microservice jajajaj');
        //   })
    },[])
    
    function handleChange(event){
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div>
        <div className="form">
            <div className="inputs--">
                <input 
                    name="topText"
                    vallue={meme.topText}
                    onChange={handleChange}
                    placeholder="Top text"

                />
                <input 
                    name="bottomText"
                    vallue={meme.bottomText}
                    onChange={handleChange}
                    placeholder="Bottom text"

                />
            </div>
            <button onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <div className="meme--box">
            <img className="meme--image" src={meme.randomImage}/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        </div>
        )
        
}

export default Meme
