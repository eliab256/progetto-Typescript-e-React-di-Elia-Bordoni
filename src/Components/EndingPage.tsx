import { useSelector, } from 'react-redux'
import { RootState } from '../Store'

const EndingPage: React.FC = () =>{

    const CorrectAnswerNumber = useSelector((state: RootState) => state.AnswersState.RightAnswersCounter); 
    const TotalAnswerNumber = useSelector((state: RootState) => state.AnswersState.TotalAnswersCounter);   

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
        </div>

    );
};

export default EndingPage;