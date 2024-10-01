import { useSelector, } from 'react-redux'
import { RootState } from './Store'

import StartingPage from "./Components/StartingPage"
import QuizPages from "./Components/QuizPages"
import EndingPage from './Components/EndingPage'

import './assets/Styles/App.css'



function App() {

  const QuestionNumber = useSelector((state:RootState) =>state.quizState.questionNum);
  const EndingQuiz = useSelector((state:RootState) => state.quizState.quizIsEnded);

  const renderPage = (): JSX.Element | null => {
    if(QuestionNumber == 0 && !EndingQuiz){
      return <StartingPage />;
    } else if (QuestionNumber > 0 && !EndingQuiz){
      return <QuizPages />;
    } else if (EndingQuiz){
      return <EndingPage />;
    }
    return null;
  } 

  
 /*   const renderPage = (): JSX.Element | null => {
      return <EndingPage />;
    } */


  return (
    <div className='App'>
      {renderPage()}
    </div>
  )
}

export default App


