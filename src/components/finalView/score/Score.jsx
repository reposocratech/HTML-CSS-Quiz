import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';

import './score.css';

export const Score = () => {
  const { score, shuffleQuestions, handleRestart } = useContext(QuizContext);

  const percentage = (score / shuffleQuestions.length) * 100;
  const message =
    percentage >= 80
      ? 'Excelente trabajo!'
      : percentage >= 60
      ? 'Buen intento!'
      : 'Sigue practicando!';
  return (
    <div className="score">
      <h2>Quiz terminado!</h2>
      <p>{message}</p>
      <p>
        Tu puntuación: {score} de {shuffleQuestions.length} (
        {percentage.toFixed()}%)
      </p>
      <button onClick={handleRestart}>Jugar de nuevo</button>
    </div>
  );
};
