import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';

import './answer.css';

export const Answer = ({ option }) => {
  const { selectedOption, shuffleQuestions, currentQuestion, selectOption } =
    useContext(QuizContext);

  const correctAnswer =
    selectedOption !== null &&
    option.id === shuffleQuestions[currentQuestion].correctAnswer;
  const incorrectAnswer =
    selectedOption === option.id &&
    option.id !== shuffleQuestions[currentQuestion].correctAnswer;

  return (
    <label
      className={`
        answer 
        ${correctAnswer ? 'correct' : ''}
        ${incorrectAnswer ? 'incorrect' : ''}
        ${selectedOption === null ? 'cursor' : ''}
      `}
    >
      <input
        type="radio"
        name="option"
        checked={selectedOption === option.id}
        onChange={() => selectOption(option.id)}
        disabled={selectedOption !== null && selectedOption !== option.id}
      />
      {option.content}
    </label>
  );
};
