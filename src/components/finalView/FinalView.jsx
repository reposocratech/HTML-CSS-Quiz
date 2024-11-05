import './finalView.css';
export const FinalView = ({
  score,
  questions,
  setCurrentQuestion,
  setScore,
  setUserAnswers,
  setCompleted,
  userAnswers,
}) => {
  const percentage = (score / questions.length) * 100;
  let message = '';
  if (percentage >= 80) message = '¡Excelente trabajo!';
  else if (percentage >= 60) message = '¡Buen intento!';
  else message = '¡Sigue practicando!';

  return (
    <article className="quiz final-view">
      <div className="score">
        <h2>¡Quiz terminado!</h2>
        <p>{message}</p>
        <p>
          Tu puntuación: {score} de {questions.length} ({percentage.toFixed()}%)
        </p>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setScore(0);
            setUserAnswers([]);
            setCompleted(false);
          }}
        >
          Jugar de nuevo
        </button>
      </div>

      <div className="dots">
        {questions.map((question, i) => (
          <span
            key={question.id}
            className={`dot ${userAnswers[i] === question.correctAnswer
              ? 'correct'
              : 'incorrect'}`
            }
          >{question.id}</span>
        ))}
      </div>
    </article>
  );
};
