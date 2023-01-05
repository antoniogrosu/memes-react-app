import troll from '/troll.png'

export default function Navbar(){
    return(
        <nav style={{display : "flex" , alignItems : "center"}}>
            <img src={troll} style={{height: "60px"}}></img>
            <h3 style={{marginLeft : "20px"}}>Meme Generator</h3>
        </nav>
    )
}