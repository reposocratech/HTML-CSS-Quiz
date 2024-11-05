import { useState } from "react";
import { questions } from "./data/questions";
import { InfoIcon } from "./components/icons/InfoIcon";
import "./App.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNext = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedOption;
    setUserAnswers(newUserAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(userAnswers[currentQuestion - 1] || null);
    }
  };

  return (
    <main>
      {completed ? (
        <article className="quiz">
          <h2>Quiz Finalizado</h2>
          <p>
            Puntuación: {score} de {questions.length}
          </p>
        </article>
      ) : (
        <article className="quiz">
          <span className="badge">{currentQuestion + 1} / {questions.length}</span>

          <h2>{questions[currentQuestion].question}</h2>

          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <label
                className={`option ${
                  selectedOption !== null &&
                  option.id === questions[currentQuestion].correctAnswer
                    ? "correct"
                    : ""
                }
                ${
                  selectedOption === option.id &&
                  option.id !== questions[currentQuestion].correctAnswer
                    ? "incorrect"
                    : ""
                }`}
                key={option.id}
              >
                <input
                  type="radio"
                  name="option"
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
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
             <InfoIcon />
              <p>{questions[currentQuestion].additionalInfo}</p>
            </div>
          )}

          <div className="buttons">
            {currentQuestion > 0 && (
              <button onClick={handlePrevious}>Anterior</button>
            )}
            <button
              className={`${selectedOption === null ? "disabled" : ""}`}
              disabled={selectedOption === null}
              onClick={() => handleNext(selectedOption)}
            >
              Siguiente
            </button>
          </div>
        </article>
      )}
    </main>
  );
};

export default Quiz;
