import { Answer } from '../answer/Answer';

import './answers.css';

export const Answers = ({
  currentQuestion,
  shuffleQuestions,
  selectOption,
  selectedOption,
}) => {
  return (
    <div className="answers">
      {shuffleQuestions[currentQuestion].options.map((option) => (
        <Answer
          key={option.id}
          option={option}
          currentQuestion={currentQuestion}
          shuffleQuestions={shuffleQuestions}
          selectOption={selectOption}
          selectedOption={selectedOption}
        />
      ))}
    </div>
  );
};
