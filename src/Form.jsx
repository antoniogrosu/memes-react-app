import { useEffect, useState } from "react"

export default function Form(){

    const [meme , setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    })
    
    function handleChange(event){
        const {name , value} = event.target
        setMeme( prev => ({...prev , [name] : value}))
    }

    const [allMemes ,setAllMemes] = useState([])

    //fetch the data
    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    } ,[] )

    //random image
    function getImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme  , 
            randomImage : url
        }))
    }
    return(
        <div className="form-img-div">
            <label>
                <input type="text" name="topText" className="input-form" placeholder="Top Text" value={meme.topText} onChange={handleChange}></input>
                <input type="text" name="bottomText" className="input-form margin" placeholder="Bottom Text" value={meme.bottomText} onChange={handleChange}></input>
            </label>
            <button className="photo-btn" style={{marginTop : "20px" , cursor : "pointer"}} onClick={getImage}>Get a New Image</button>
            <div className="img-div" style={{marginTop : "60px" , overflow : "hidden" , position : "relative" , display : "flex" , alignItems : "center" , justifyContent : "center"}}>
                <img src={meme.randomImage} style={{zIndex : 0  , maxWidth : "100%" , borderRadius : "3px"}}></img>
                <h1 className="meme-text top">{meme.topText}</h1>
                <h1 className="meme-text bottom">{meme.bottomText}</h1>
            </div>
        </div>
    )
}