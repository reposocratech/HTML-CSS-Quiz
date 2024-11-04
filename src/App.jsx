import { useState } from "react";
import { questions } from "./data/questions";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
              </svg>
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
