import { useContext, useEffect, useRef } from 'react';
import { marked } from 'marked';
import { QuizContext } from '../../../context/QuizContext';

import './results.css';

export const Results = () => {
  const { shuffleQuestions, userAnswers } = useContext(QuizContext);
  const firstQuestionRef = useRef(null);

  useEffect(() => {
    if (firstQuestionRef.current) {
      firstQuestionRef.current.scrollIntoView();
    }
  }, []);

  return (
    <section className="results">
      {shuffleQuestions.map((question, i) => (
        <article
          className="quiz"
          key={question.id}
          id={`question-${i + 1}`}
          ref={i === 0 ? firstQuestionRef : null}
        >
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
                {option.content}
              </p>
            ))}
          </div>
          <p
            className="info"
            dangerouslySetInnerHTML={{
              __html: marked(question.additionalInfo),
            }}
          ></p>
        </article>
      ))}
    </section>
  );
};
