import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';
import { IconReload, IconReportAnalytics } from '@tabler/icons-react';

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
    <article className="score">
      <h2 className="message">{message}</h2>
      <div className="score-circles">
        <div>
          <span>
            {score} / {shuffleQuestions.length}
          </span>
        </div>
        <div>
          <span>{percentage.toFixed()}%</span>
        </div>
      </div>
      <p>
        Has contestado correctamente {score} preguntas de un total de{' '}
        {shuffleQuestions.length}, consiguiendo un porcentaje de acierto de (
        {percentage.toFixed()}%).
      </p>

      <div className="buttons">
        <button
          onClick={() => setShowResults(true)}
          hidden={showResults === true}
        >
          <IconReportAnalytics stroke={2} />
          Ver resultados
        </button>
        <button onClick={handleRestart}>
          <IconReload stroke={2} />
          Jugar de nuevo
        </button>
      </div>
    </article>
  );
};
