import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from './Store';
import { RootState } from './Store';

import StartingPage from './Components/StartingPage';
import QuizPages from './Components/QuizPages';
import EndingPage from './Components/EndingPage';

import './assets/Styles/App.css';
import { useEffect } from 'react';
import { resetStatus } from './Store/StatusState';

function App() {
    const startingQuiz = useSelector((state: RootState) => state.quizState.quizIsStarted);
    const endingQuiz = useSelector((state: RootState) => state.quizState.quizIsEnded);
    const error = useSelector((state: RootState) => state.StatusState.error);
    const isLoading = useSelector((state: RootState) => state.StatusState.isLoading);

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (error) {
            alert('An error has occurred. Please reload the page to try again');
            dispatch(resetStatus());
        }
    }, [error, dispatch]);

    const renderPage = (): JSX.Element | null => {
        if (isLoading) {
            return <p className="loadingMessage">Wait a moment, page is currently loading</p>;
        } else if (!startingQuiz && !endingQuiz) {
            return <StartingPage />;
        } else if (startingQuiz && !endingQuiz) {
            return <QuizPages />;
        } else if (startingQuiz && endingQuiz) {
            return <EndingPage />;
        }
        return null;
    };

    return <div className="App">{renderPage()}</div>;
}

export default App;
