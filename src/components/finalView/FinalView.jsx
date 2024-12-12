import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { Results } from './results/Results';

import './finalView.css';
import { Dots } from './dots/Dots';

export const FinalView = () => {
  const { score, shuffleQuestions, handleRestart } = useContext(QuizContext);

  const percentage = (score / shuffleQuestions.length) * 100;
  const message =
    percentage >= 80
      ? 'Excelente trabajo!'
      : percentage >= 60
      ? 'Buen intento!'
      : 'Sigue practicando!';

  return (
    <>
      <article className="quiz final-view">
        <div className="score">
          <h2>Quiz terminado!</h2>
          <p>{message}</p>
          <p>
            Tu puntuación: {score} de {shuffleQuestions.length} (
            {percentage.toFixed()}%)
          </p>
          <button onClick={handleRestart}>Jugar de nuevo</button>
        </div>

        <Dots />
      </article>
      <Results />
    </>
  );
};
