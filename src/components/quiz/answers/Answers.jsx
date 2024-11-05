import './answers.css';

export const Answers = ({currentQuestion, questions, selectOption, selectedOption}) => {
  return (
    <div className="answers">
      {questions[currentQuestion].options.map((option) => (
        <label
          className={`answer ${
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
  );
};
