import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';

export const Dots = () => {
  const { shuffleQuestions, userAnswers } = useContext(QuizContext);

  return (
    <div className="dots">
      {shuffleQuestions.map(({ id, correctAnswer }, i) => (
        <span
          key={id}
          className={`dot ${
            correctAnswer === userAnswers[i] ? 'correct' : 'incorrect'
          }`}
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
};
