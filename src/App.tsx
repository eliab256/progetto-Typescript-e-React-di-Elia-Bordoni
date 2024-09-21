import react from 'react'
import { useSelector, } from 'react-redux'
import { RootState } from './Store'

import StartingPage from "./Components/StartingPage"
import QuizCard from "./Components/QuizCard"

import './assets/Styles/App.css'

function App() {

  const isQuizStarted = useSelector((state:RootState) => state.quizState.quizIsStarted);

  return (
    <div className='App'>
      {!isQuizStarted ? <StartingPage /> : <QuizCard />}
    
    </div>
  )
}

export default App
