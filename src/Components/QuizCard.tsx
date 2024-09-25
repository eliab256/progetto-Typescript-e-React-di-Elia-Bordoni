import { QuizData } from "../Data/DataQuiz"
import { useSelector, } from 'react-redux'
import { RootState } from '../Store'

import "../assets/Styles/QuizCard.css"

interface QuizCardProps {
    quiz: QuizData;
}

const QuizCard: React.FC<QuizCardProps> = ({quiz}) =>{

    const QuestionNumber = useSelector((state:RootState) =>state.quizState.questionNum);

    return (
        <div className="card">
            <div className="question">
                {QuestionNumber}. {quiz.question} 
            </div>
            <div className="answers" id="answer1">
                <div className="questionText">
                    {quiz.answers[0].text}
                </div>
                <div className="answerButton">
                    <button /*onClick={}*/></button>
                </div> 
            </div>
            <div className="answers" id="answer1">
                <div className="questionText">
                    {quiz.answers[1].text}
                </div>
                <div className="answerButton">
                    <button /*onClick={}*/></button>
                </div> 
            </div>
            <div className="answers" id="answer1">
                <div className="questionText">
                    {quiz.answers[2].text}
                </div>
                <div className="answerButton">
                    <button /*onClick={}*/></button>
                </div> 
            </div>
            <div className="answers" id="answer1">
                <div className="questionText">
                    {quiz.answers[3].text}
                </div>
                <div className="answerButton">
                    <button /*onClick={}*/></button>
                </div> 
            </div>
            
        </div>
    ) 
}

export default QuizCard;