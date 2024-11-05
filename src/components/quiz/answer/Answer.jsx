import './answer.css';

export const Answer = ({
  option,
  currentQuestion,
  shuffleQuestions,
  selectOption,
  selectedOption,
}) => {
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
        ${incorrectAnswer ? 'incorrect' : ''}`
      }
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
