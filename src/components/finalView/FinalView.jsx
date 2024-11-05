import './finalView.css';
export const FinalView = ({ score, questions, handleRestart }) => {
  const percentage = (score / questions.length) * 100;
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
          Tu puntuación: {score} de {questions.length} ({percentage.toFixed()}%)
        </p>
        <button onClick={handleRestart}>Jugar de nuevo</button>
      </div>

      <div className="dots">
        {questions.map(({ id, correctAnswer }, i) => (
          <span
            key={id}
            className={`dot ${correctAnswer === i + 1 ? 'correct' : 'incorrect'}`}
          >
            {id}
          </span>
        ))}
      </div>
    </article>
  );
};
