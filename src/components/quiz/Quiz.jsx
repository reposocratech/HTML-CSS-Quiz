import { Answers } from './answers/Answers';
import { Buttons } from './buttons/Buttons';
import { Info } from './info/Info';

import './quiz.css';

export const Quiz = ({currentQuestion, shuffleQuestions, selectOption, selectedOption, handleNext, handlePrevious}) => {
  return (
    <article className="quiz">
      <span className="badge">
        {currentQuestion + 1} / {shuffleQuestions.length}
      </span>

      <h2>{shuffleQuestions[currentQuestion].question}</h2>

      <Answers
        shuffleQuestions={shuffleQuestions}
        currentQuestion={currentQuestion}
        selectOption={selectOption}
        selectedOption={selectedOption}
      />

      {selectedOption > 0 && (
        <Info
          currentQuestion={currentQuestion}
          shuffleQuestions={shuffleQuestions}
        />
      )}

      <Buttons
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        shuffleQuestions={shuffleQuestions}
      />
    </article>
  );
};
