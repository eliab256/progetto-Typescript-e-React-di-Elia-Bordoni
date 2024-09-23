import "../assets/Styles/quizPages.css"

const QuizPages: React.FC = () => {

    return(
        <div className="cardContainer widthController">
            <div className="loadingBar"></div>
            <div className="cardSection"></div>
            <div className="questionsButton">
                <button /*onClick={}*/>Comeback</button>
                <button /*onClick={}*/>Next question</button>  
            </div>
        </div>
    );
};

export default QuizPages;