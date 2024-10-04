import { QuizData } from '../Data/DataQuiz';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Store';
import '../assets/Styles/QuizCard.css';
import { rightAnswer, newAnswer, wrongAnswerChange, setSelectedAnswer } from '../Store/AnswersState';
import { answerErrorIsNotThere } from '../Store/ErrorsState';

interface QuizCardProps {
    quiz: QuizData;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
    const QuestionNumber = useSelector((state: RootState) => state.quizState.questionNum);
    const isQuestionAnswered = useSelector((state: RootState) => state.AnswersState.isAnswered);
    const isPrevAnswerCorrect = useSelector((state: RootState) => state.AnswersState.isAnsweredCorrect);

    const selectedAnswerIndex = useSelector((state: RootState) => state.AnswersState.selectedAnswerIndex);
    const AnswerErrorState: boolean = useSelector((state: RootState) => state.DisplayError.displayTotAnswerError);

    const dispatch: AppDispatch = useDispatch();

    const handleAnswerClick = (index: number): void => {
        dispatch(setSelectedAnswer(index));
        const selectedAnswer = quiz.answers[index];

        if (selectedAnswer.correct && !isQuestionAnswered) {
            dispatch(rightAnswer());
            dispatch(newAnswer());
        } else if (selectedAnswer.correct && isQuestionAnswered) {
            if (!isPrevAnswerCorrect) {
                dispatch(rightAnswer());
            }
        } else if (!selectedAnswer.correct && !isQuestionAnswered) {
            dispatch(newAnswer());
        } else if (!selectedAnswer.correct && isQuestionAnswered) {
            if (isPrevAnswerCorrect) {
                dispatch(wrongAnswerChange());
            }
        }

        if (AnswerErrorState) {
            dispatch(answerErrorIsNotThere());
        }
    };

    return (
        <div className="card">
            <div className="question">
                {QuestionNumber}. {quiz.question}
            </div>

            {quiz.answers.map((text, index) => (
                <div key={index} className="answers">
                    <div className="questionText">{text.text}</div>
                    <div
                        className={`answerButton ${
                            selectedAnswerIndex === index && isQuestionAnswered ? 'answerButtonClicked' : ''
                        }`}
                    >
                        <button onClick={() => handleAnswerClick(index)}></button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QuizCard;
