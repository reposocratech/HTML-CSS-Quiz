import { Answer } from '../answer/Answer';

import './answers.css';

export const Answers = ({
  currentQuestion,
  questions,
  selectOption,
  selectedOption,
}) => {
  return (
    <div className="answers">
      {questions[currentQuestion].options.map((option) => (
        <Answer
          key={option.id}
          option={option}
          currentQuestion={currentQuestion}
          questions={questions}
          selectOption={selectOption}
          selectedOption={selectedOption}
        />
      ))}
    </div>
  );
};
