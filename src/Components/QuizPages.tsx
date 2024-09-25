import { useSelector, } from 'react-redux'
import { RootState } from '../Store'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";

import "../assets/Styles/quizPages.css";
import quizData, { NumberOfQuestions } from "../Data/DataQuiz";
import QuizCard from "./QuizCard";
import { endQuiz, nextQuestion, prevQuestion } from '../Store/QuizState';
import { answerErrorIsNotThere, answerErrorIsThere } from '../Store/ErrorsState';


const QuizPages: React.FC = () => {

    const QuestionNumber = useSelector((state:RootState) => state.quizState.questionNum);
    const TotalAnswer = useSelector((state:RootState) => state.AnswersCounter.TotalAnswersCounter )
    const AnswerErrorState = useSelector((state:RootState) => state.DisplayError.displayTotAnswerError)

    const dispatch: AppDispatch = useDispatch();

    const handleGoBack = () => {
        if(AnswerErrorState){
            dispatch(answerErrorIsNotThere());
            dispatch(prevQuestion());
        } else{
            dispatch(prevQuestion());
        }
        console.log(TotalAnswer,QuestionNumber,NumberOfQuestions)
    };

    const handleNextQuestion = () => {
        if(TotalAnswer === NumberOfQuestions && QuestionNumber === NumberOfQuestions ){
        dispatch(endQuiz());
        } else if (QuestionNumber < NumberOfQuestions){
            dispatch(nextQuestion());
        } else if (TotalAnswer !== NumberOfQuestions && QuestionNumber === NumberOfQuestions){
              if(!AnswerErrorState){
                dispatch(answerErrorIsThere());
              };
        }
        console.log(TotalAnswer,QuestionNumber,NumberOfQuestions)
    };


    return(
        <div className="cardContainer widthController">
            <div className="loadingBar"></div>
            <div className="cardSection">
                <QuizCard quiz={quizData[QuestionNumber-1]}/>
            </div>
            {AnswerErrorState && (
                <div className='messageError'>
                <p>Answer all the questions to proceed</p>
             </div>
            )}
            <div className="questionsButton">
                <button onClick={handleGoBack}>Go back</button>
                <button onClick={handleNextQuestion}>Next question</button>  
            </div>
        </div>
    );
};

export default QuizPages;

