import { NumberOfQuestions, QuizData } from "../Data/DataQuiz"
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
    const isPrevAnswerCorrect = useSelector((state: RootState) => state.AnswersState.isAnsweredCorrect);
    const CorrectAnswerNumber = useSelector((state: RootState) => state.AnswersState.RightAnswersCounter); //  serve solo x prova
    const TotalAnswerNumber = useSelector((state: RootState) => state.AnswersState.TotalAnswersCounter);   //  serve solo x prova

    const dispatch: AppDispatch = useDispatch();

    const handleAnswerClick = (index: number): void =>{
        const selectedAnswer = quiz.answers[index];

        if(selectedAnswer.correct && !isQuestionAnswered){    //risposta corretta && non era stata ancora selezionata la risposta
            dispatch(rightAnswer());   //counter risposte corrette +1
            dispatch(answerDone());    //counter risposte totali +1
            dispatch(newAnswer());     //stato "is Answered" diventa true
        } else if(selectedAnswer.correct && isQuestionAnswered){  //risposta corretta && ma era già stata selezionata la risposta
            dispatch(rightAnswer());
        } else if(!selectedAnswer.correct && !isQuestionAnswered){ //risposta errata && non era stata ancora selezionata la risposta
            dispatch(answerDone());
            dispatch(newAnswer());
        } else if(!selectedAnswer.correct && isQuestionAnswered){  //risposta errata && era già stata selezionata la risposta
            if(isPrevAnswerCorrect){
                dispatch(wrongAnswerChange())
            }
        }

        console.log(`TotalAnswerNumber: ${TotalAnswerNumber}, QuestionNumber: ${QuestionNumber}, CorrectAnswerNumber: ${CorrectAnswerNumber}, 
            selectedAnswer.correct: ${selectedAnswer.correct}, isQuestionAnswered: ${isQuestionAnswered}, PrevAnswerCorrect: ${isPrevAnswerCorrect}`);


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
                <div className={`answerButton ${isQuestionAnswered ? "answerButtonClicked":""}`}>
                    <button onClick={() => handleAnswerClick(index)}></button>
                </div> 
                </div> 
            ))} 
        </div>
    ) 
}

export default QuizCard;
