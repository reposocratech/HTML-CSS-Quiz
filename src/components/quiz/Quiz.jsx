import { InfoIcon } from '../icons/InfoIcon';
import { marked } from 'marked';

import './quiz.css';

export const Quiz = ({currentQuestion, questions, selectOption, selectedOption, handleNext, handlePrevious}) => {
  return (
    <article className="quiz">
      <span className="badge">
        {currentQuestion + 1} / {questions.length}
      </span>

      <h2>{questions[currentQuestion].question}</h2>

      <div className="options">
        {questions[currentQuestion].options.map((option) => (
          <label
            className={`option ${
              selectedOption !== null &&
                    option.id === questions[currentQuestion].correctAnswer
                ? 'correct'
                : ''
            }
                ${
          selectedOption === option.id &&
                  option.id !== questions[currentQuestion].correctAnswer
            ? 'incorrect'
            : ''
          }`}
            key={option.id}
          >
            <input
              type="radio"
              name="option"
              checked={selectedOption === option.id}
              onChange={() => selectOption(option.id)}
              disabled={
                selectedOption !== null && selectedOption !== option.id
              }
            />
            {option.content}
          </label>
        ))}
      </div>

      {selectedOption > 0 && (
        <div className="info">
          <h3>
            <InfoIcon />
                  Información adicional
          </h3>
          <p dangerouslySetInnerHTML={{ __html: marked(questions[currentQuestion].additionalInfo) }} />
        </div>
      )}

      <div className="buttons">
        {currentQuestion > 0 && (
          <button onClick={handlePrevious}>Anterior</button>
        )}

        <button
          className={`${selectedOption === null ? 'disabled' : ''}`}
          disabled={selectedOption === null}
          onClick={handleNext}
        >
          {currentQuestion === questions.length - 1
            ? 'Finalizar'
            : 'Siguiente'}
        </button>
      </div>
    </article>
  );
};
