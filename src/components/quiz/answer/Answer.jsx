export const Answer = ({
  option,
  currentQuestion,
  questions,
  selectOption,
  selectedOption,
}) => {
  const correctAnswer =
    selectedOption !== null &&
    option.id === questions[currentQuestion].correctAnswer;
  const incorrectAnswer =
    selectedOption === option.id &&
    option.id !== questions[currentQuestion].correctAnswer;

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
