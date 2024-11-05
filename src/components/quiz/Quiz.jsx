import { Answers } from './answers/Answers';
import { Info } from './info/Info';

import './quiz.css';

export const Quiz = ({currentQuestion, questions, selectOption, selectedOption, handleNext, handlePrevious}) => {
  return (
    <article className="quiz">
      <span className="badge">
        {currentQuestion + 1} / {questions.length}
      </span>

      <h2>{questions[currentQuestion].question}</h2>

      <Answers
        questions={questions}
        currentQuestion={currentQuestion}
        selectOption={selectOption}
        selectedOption={selectedOption}
      />

      {selectedOption > 0 && (
        <Info
          currentQuestion={currentQuestion}
          questions={questions}
        />
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