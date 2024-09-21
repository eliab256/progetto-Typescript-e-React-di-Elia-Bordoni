import react from 'react'
import { useSelector, UseSelector } from 'react-redux'
import { RootState } from './Store'

import StartingPage from "./Components/StartingPage"
import QuizCard from "./Components/QuizCard"

import './assets/Styles/App.css'

function App() {

  const quizIsStarted = useSelector((state:RootState) => state.quizState.quizIsStarted);

  return (
    <div className='App'>
      {!quizIsStarted ? <StartingPage /> : <QuizCard />}
    
    </div>
  )
}

export default App
