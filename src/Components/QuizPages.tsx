import { useSelector, } from 'react-redux'
import { RootState } from '../Store'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";

import "../assets/Styles/quizPages.css";
import quizData from "../Data/DataQuiz";
import QuizCard from "./QuizCard";
import { nextQuestion, prevQuestion } from '../Store/QuizState';


const QuizPages: React.FC = () => {

    const isQuizStarted = useSelector((state:RootState) => state.quizState.quizIsStarted);
    const QuestionNumber = useSelector((state:RootState) =>state.quizState.questionNum);

    const dispatch: AppDispatch = useDispatch();

    const handleGoBack = () => {
        dispatch(prevQuestion());
    };

    const handleNextQuestion = () => {
        dispatch(nextQuestion());
    };


    return(
        <div className="cardContainer widthController">
            <div className="loadingBar"></div>
            <div className="cardSection">
                <QuizCard quiz={quizData[0]}/>
            </div>
            <div className="questionsButton">
                <button onClick={handleGoBack}>Go back</button>
                <button onClick={handleNextQuestion}>Next question</button>  
            </div>
        </div>
    );
};

export default QuizPages;