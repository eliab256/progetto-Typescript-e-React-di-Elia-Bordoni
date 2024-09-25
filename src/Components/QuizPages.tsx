import { useSelector, } from 'react-redux'
import { RootState } from '../Store'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";

import "../assets/Styles/quizPages.css";
import quizData, { NumberOfQuestions } from "../Data/DataQuiz";
import QuizCard from "./QuizCard";
import { endQuiz, nextQuestion, prevQuestion } from '../Store/QuizState';


const QuizPages: React.FC = () => {

    const QuestionNumber = useSelector((state:RootState) => state.quizState.questionNum);
    const TotalAnswer = useSelector((state:RootState) => state.AnswersCounter.TotalAnswersCounter )

    const dispatch: AppDispatch = useDispatch();

    const handleGoBack = () => {
        dispatch(prevQuestion());
    };

    const handleNextQuestion = () => {
        if(TotalAnswer == NumberOfQuestions ){
        dispatch(endQuiz());
        } else {dispatch(nextQuestion());} 
    };


    return(
        <div className="cardContainer widthController">
            <div className="loadingBar"></div>
            <div className="cardSection">
                <QuizCard quiz={quizData[QuestionNumber-1]}/>
            </div>
            <div className="questionsButton">
                <button onClick={handleGoBack}>Go back</button>
                <button onClick={handleNextQuestion}>Next question</button>  
            </div>
        </div>
    );
};

export default QuizPages;