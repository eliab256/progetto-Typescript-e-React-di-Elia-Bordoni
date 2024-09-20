import "../assets/Styles/startingPage.css"
import HeartGif from "../assets/Image/PlanetGif1920x1080.gif"


const StartingPage = () =>{

    return(
        <div className="startingPageContainer widthController">
            <div className="title">
                <img alt="quiz app" src=""></img>
            </div>
            <div className="planetGif">
                <img alt="planet gif" src={HeartGif}></img>
            </div>
            <div className="startButton">
                <button /*</div>onclick={}*/>Quiz Start</button>
            </div>
        </div>
    );
};


export default StartingPage;