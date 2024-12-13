import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';

import './score.css';

export const Score = () => {
  const {
    score,
    shuffleQuestions,
    handleRestart,
    setShowResults,
    showResults,
  } = useContext(QuizContext);

  const percentage = (score / shuffleQuestions.length) * 100;
  const message =
    percentage >= 80
      ? '¡Excelente trabajo!'
      : percentage >= 60
      ? '¡Buen intento!'
      : '¡Sigue practicando!';
  return (
    <section className="score">
      <h2 className="message">{message}</h2>
      <p>
        Has contestado {score} preguntas correctamente de un total de{' '}
        {shuffleQuestions.length}, consiguiendo un porcentaje de acierto de (
        {percentage.toFixed()}%).
      </p>
      <button
        onClick={() => setShowResults(true)}
        hidden={showResults === true}
      >
        Ver resultados
      </button>
      <button onClick={handleRestart}>Jugar de nuevo</button>
    </section>
  );
};
