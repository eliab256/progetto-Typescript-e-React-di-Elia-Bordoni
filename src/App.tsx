import { useSelector, } from 'react-redux'
import { RootState } from './Store'

import StartingPage from "./Components/StartingPage"
import QuizPages from "./Components/QuizPages"

import './assets/Styles/App.css'

function App() {

  const isQuizStarted = useSelector((state:RootState) => state.quizState.quizIsStarted);

  return (
    <div className='App'>
      {!isQuizStarted ? <StartingPage /> : <QuizPages />}
    </div>
  )
}

export default App


