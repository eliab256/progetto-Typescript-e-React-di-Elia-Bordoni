import { useSelector, } from 'react-redux'
import { RootState } from './Store'

import StartingPage from "./Components/StartingPage"
import QuizPages from "./Components/QuizPages"

import './assets/Styles/App.css'

function App() {

  const QuestionNumber = useSelector((state:RootState) =>state.quizState.questionNum);

  return (
    <div className='App'>
      {(QuestionNumber == 0) ? <StartingPage /> : <QuizPages />}
    </div>
  )
}

export default App


