import "../assets/Styles/quizPages.css";
import QuizCard from "./QuizCard";

const QuizPages: React.FC = () => {

    interface QuizData {
        question: string;
        answers: [string,string,string,string];
    }

    const quizData: QuizData[] =[{
        question: "What is recycling and why is it important?",
        answers:[
            "A way to reuse items without modifying them.",
            "A process to transform waste materials into new products.",
            "A technique for burning waste.",
            "A method for burying waste."
        ]
    },
    {}

    ];

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