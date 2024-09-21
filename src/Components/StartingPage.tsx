import "../assets/Styles/startingPage.css"
import HeartGif from "../assets/Image/PlanetGif1920x1080.gif"
import EcoQuiz from "../assets/Image/EcoQuiz.png"

import { startQuiz } from "../Store/QuizState";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";


const StartingPage: React.FC = () =>{

    const dispatch: AppDispatch = useDispatch();

    const handleStartQuiz = () => dispatch(startQuiz());

    return(
        <div className="startingPageContainer widthController">
            <div className="title">
                <img alt="quiz app" src={EcoQuiz}></img>
            </div>
            <div className="quizDescription">
                <p>
                    Raising awareness about the environment and climate change is essential for a sustainable future. 
                    Our planet faces challenges such as rising temperatures and the depletion of natural resources.
                    It is crucial for everyone to understand the impact of their daily actions and commit to reducing
                    their ecological footprint.
                    <br></br>
                    Today, you will have the opportunity to test your knowledge on this topic through a quiz consisting 
                    of 10 multiple-choice questions. Each question will have only one correct answer. At the end of the 
                    quiz, you will be shown your results, and we will further discuss the topics covered. Good luck!
                </p>
            </div>
            <div className="planetGif">
                <img alt="planet gif" src={HeartGif}></img>
            </div>
            <div className="startButton">
                <button onClick={handleStartQuiz}>Quiz Start</button>
            </div>
        </div>
    );
};


export default StartingPage;