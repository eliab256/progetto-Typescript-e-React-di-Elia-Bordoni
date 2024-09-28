import { QuizData } from "../Data/DataQuiz"
import { useSelector, } from 'react-redux'
import { RootState } from '../Store'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";


import "../assets/Styles/QuizCard.css"
import { answerDone, rightAnswer, newAnswer, wrongAnswerChange } from "../Store/AnswersState";

interface QuizCardProps {
    quiz: QuizData;
}

const QuizCard: React.FC<QuizCardProps> = ({quiz}) =>{

    const QuestionNumber = useSelector((state:RootState) =>state.quizState.questionNum);
    const isQuestionAnswered = useSelector((state:RootState) => state.AnswersState.isAnswered);
    const isPrevAnswerCorrect = useSelector((state: RootState) => state.AnswersState.isAnsweredCorrect)

    const dispatch: AppDispatch = useDispatch();

    const handleAnswerClick = (index: number) =>{
        const selectedAnswer = quiz.answers[index];

        if(selectedAnswer.correct && !isQuestionAnswered){
            dispatch(rightAnswer());
            dispatch(answerDone());
            dispatch(newAnswer());
        } else if(selectedAnswer.correct && isQuestionAnswered){
            dispatch(rightAnswer());
        } else if(!selectedAnswer.correct && !isQuestionAnswered){
            dispatch(answerDone());
            dispatch(newAnswer());
        } else if(!selectedAnswer.correct && isQuestionAnswered){
            if(isPrevAnswerCorrect){
                dispatch(wrongAnswerChange())
            }
        }

    } 

    return (
        <div className="card">
            <div className="question">
                {QuestionNumber}. {quiz.question} 
            </div>

            {quiz.answers.map((text, index) =>(
               <div key={index} className="answers">
                <div className="questionText">
                    {text.text}
                </div>
                <div className="answerButton">
                    <button onClick={() => handleAnswerClick(index)}></button>
                </div> 
                </div> 
            ))} 
        </div>
    ) 
}

export default QuizCard;
