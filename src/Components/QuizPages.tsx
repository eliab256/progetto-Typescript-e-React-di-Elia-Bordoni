import { useSelector, } from 'react-redux'
import { RootState } from '../Store'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";

import "../assets/Styles/quizPages.css";
import quizData, { NumberOfQuestions } from "../Data/DataQuiz";
import QuizCard from "./QuizCard";
import { endQuiz, questionNumber } from '../Store/QuizState';
import { nextQuestion } from '../Store/AnswersState';
import { answerErrorIsThere } from '../Store/ErrorsState';



const QuizPages: React.FC = () => {

    const QuestionNumber: number = useSelector((state:RootState) => state.quizState.questionNum);
    const AnswerErrorState: boolean = useSelector((state:RootState) => state.DisplayError.displayTotAnswerError)
    const isQuestionAnswered = useSelector((state:RootState) => state.AnswersState.isAnswered); 

    const dispatch: AppDispatch = useDispatch();

    const handleNextQuestion = (): void => {

        if(QuestionNumber === NumberOfQuestions && isQuestionAnswered){
        dispatch(endQuiz());
        } else if(isQuestionAnswered){
            dispatch(questionNumber());
            dispatch(nextQuestion());
            
        } else if(!isQuestionAnswered){
            dispatch(answerErrorIsThere());
        }
    };

    const loadingPercentage = (QuestionNumber / NumberOfQuestions) * 100;

    return(
        <div className="cardContainer widthController">
            <div className="loadingBar">
                <div className='loadingBarState' style={{ width: `${loadingPercentage}%` }}></div>
            </div>
            <div className="cardSection">
                <QuizCard quiz={quizData[QuestionNumber-1]}/>
                <div className={AnswerErrorState ? 'messageError' : "noMessageError"}>
                {AnswerErrorState && (
                <p>Answer the questions to proceed</p>)}
             </div>
            
            </div>
           
            <div className="questionsButton">
                <button onClick={handleNextQuestion}>Next question</button>  
            </div>
        </div>
    );
};

export default QuizPages;

