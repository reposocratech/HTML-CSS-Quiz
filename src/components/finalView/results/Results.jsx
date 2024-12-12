import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';

import './results.css';

export const Results = () => {
  const { shuffleQuestions, userAnswers } = useContext(QuizContext);
  return (
    <article className="results">
      {shuffleQuestions.map((question, i) => (
        <article className="quiz" key={question.id}>
          <h3>Pregunta {i + 1}</h3>
          <p>{question.question}</p>
          <div className="answers">
            {question.options.map((option) => (
              <p
                key={option.id}
                className={`answer
                ${option.id === question.correctAnswer ? 'correct' : ''}
                ${
                  option.id === userAnswers[i] &&
                  option.id !== question.correctAnswer
                    ? 'incorrect'
                    : ''
                }
              `}
              >
                {option.id}: {option.content}
              </p>
            ))}
          </div>
          <p>{question.additionalInfo}</p>
        </article>
      ))}
    </article>
  );
};
