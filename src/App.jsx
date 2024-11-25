import { useContext } from 'react';
import { QuizContext } from './context/QuizContext';
import { Footer } from './components/footer/Footer';
import { FinalView } from './components/finalView/FinalView';
import { Quiz } from './components/quiz/Quiz';

import './App.css';

const App = () => {
  const { completed } = useContext(QuizContext);

  return (
    <>
      <main>
        <h1>
          <div className="img">
            <img src="./images/favicon.png" alt="Logo de HTML-CSS-QUIZ" />
          </div>
          HTML & CSS QUIZ
        </h1>
        {completed ? <FinalView /> : <Quiz />}
      </main>
      <Footer />
    </>
  );
};
export default App;
