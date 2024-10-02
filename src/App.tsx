import { useSelector, } from 'react-redux'
import { RootState } from './Store'

import StartingPage from "./Components/StartingPage"
import QuizPages from "./Components/QuizPages"
import EndingPage from './Components/EndingPage'

import './assets/Styles/App.css'



function App() {

  const StartingQuiz = useSelector((state:RootState) =>state.quizState.quizIsStarted);
  const EndingQuiz = useSelector((state:RootState) => state.quizState.quizIsEnded);

  console.log(StartingQuiz);


  const renderPage = (): JSX.Element | null => {
    if(!StartingQuiz && !EndingQuiz){
      return <StartingPage />;
    } else if (StartingQuiz && !EndingQuiz){
      return <QuizPages />;
    } else if (StartingQuiz && EndingQuiz){
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


