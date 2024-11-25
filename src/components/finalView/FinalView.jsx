import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

import './finalView.css';

export const FinalView = () => {
  const { score, shuffleQuestions, userAnswers, handleRestart } =
    useContext(QuizContext);

  const percentage = (score / shuffleQuestions.length) * 100;
  const message =
    percentage >= 80
      ? 'Excelente trabajo!'
      : percentage >= 60
      ? 'Buen intento!'
      : 'Sigue practicando!';

  return (
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

      <div className="dots">
        {shuffleQuestions.map(({ id, correctAnswer }, i) => (
          <span
            key={id}
            className={`dot ${
              correctAnswer === userAnswers[i] ? 'correct' : 'incorrect'
            }`}
          >
            {id}
          </span>
        ))}
      </div>
    </article>
  );
};
