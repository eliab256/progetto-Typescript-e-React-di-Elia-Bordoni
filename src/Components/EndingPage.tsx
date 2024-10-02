import { useSelector, } from 'react-redux'
import { RootState } from '../Store'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";
import "../assets/Styles/EndingPage.css"
import { resetAnswersState } from '../Store/AnswersState';
import { resetErrorState } from '../Store/ErrorsState';
import { resetQuizState } from '../Store/QuizState';
import quizData from '../Data/DataQuiz';
import HeartGif from "../assets/Image/PlanetGif1920x1080.gif"

const EndingPage: React.FC = () =>{

    const CorrectAnswerNumber = useSelector((state: RootState) => state.AnswersState.RightAnswersCounter); 
    const TotalAnswerNumber = quizData.length;  
    
    const dispatch: AppDispatch = useDispatch();

    const PercentResult = (): number => {
        if (TotalAnswerNumber === 0) {
            return 0;
        } else {
        return Math.round((CorrectAnswerNumber / TotalAnswerNumber) * 100);
        }
    };

    const CongratsMessage = (PercentResult:number) => {
        if(PercentResult < 50){
            return "Unfortunately, you answered less than half of the questions. We encourage you to retake the test to enhance your awareness.";
        } else if(PercentResult >= 50 && PercentResult <= 70){
            return "You answered just over half of the questions. While your performance was not satisfactory, there is room for improvement. We encourage you to retake the test!"
        } else if(PercentResult >70 && PercentResult <100){
            return "Very well done! You answered correctly to almost all the questions and are close to perfection."
        } else if(PercentResult === 100){
            return "You answered all the questions correctly. The quiz was executed perfectly. Congratulations!"
        }
    }

    const handleRestartClick = (): void => {
        dispatch(resetAnswersState());
        dispatch(resetErrorState());
        dispatch(resetQuizState());
    }


    return(
        <div className="endingPageContainer widthController">
            <div className='testResult'>
                {`${CorrectAnswerNumber} / ${TotalAnswerNumber}`}
            </div>
            <div className='testResultPercent'>
            {`You answered correctly to ${PercentResult()}% of the questions.`}
            </div>
            <div className='resultComment'>
                {CongratsMessage(PercentResult())}
            </div>
            <div className="planetGif">
                <img alt="planet gif" src={HeartGif}></img>
            </div>
            <div className="restartButton">
                <button onClick={handleRestartClick}>Restart Quiz</button>
            </div>
            
        </div>

    );
};

export default EndingPage;