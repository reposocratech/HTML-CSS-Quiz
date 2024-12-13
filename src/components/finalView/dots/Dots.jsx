import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';

import './dots.css';

export const Dots = () => {
  const { shuffleQuestions, userAnswers } = useContext(QuizContext);

  return (
    <div className="dots">
      {shuffleQuestions.map(({ id, correctAnswer }, i) => (
        <a
          key={id}
          href={`#question-${i + 1}`}
          className={`dot ${
            correctAnswer === userAnswers[i] ? 'correct' : 'incorrect'
          }`}
        >
          {i + 1}
        </a>
      ))}
    </div>
  );
};
