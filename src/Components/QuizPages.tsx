import "../assets/Styles/quizPages.css";
import QuizCard from "./QuizCard";
//import DataQuiz from "../Data/DataQuiz";

const QuizPages: React.FC = () => {

    return(
        <div className="cardContainer widthController">
            <div className="loadingBar"></div>
            <div className="cardSection">
                <QuizCard />
            </div>
            <div className="questionsButton">
                <button /*onClick={}*/>Comeback</button>
                <button /*onClick={}*/>Next question</button>  
            </div>
        </div>
    );
};

export default QuizPages;