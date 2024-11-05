import { Answers } from './answers/Answers';
import { Buttons } from './buttons/Buttons';
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

      <Buttons
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        questions={questions}
      />
    </article>
  );
};
