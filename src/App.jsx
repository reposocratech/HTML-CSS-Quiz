import { useState } from 'react';
import { questions } from './data/questions';
import { Footer } from './components/footer/Footer';
import { FinalView } from './components/finalView/FinalView';
import confetti from 'canvas-confetti';

import './App.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const selectOption = (id) => {
    const { correctAnswer } = questions[currentQuestion];
    const isCorrect = id === correctAnswer;

    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, id]);

    if (isCorrect) {
      confetti({
        startVelocity: 50,
        particleCount: 25,
      });
      setScore((score) => score + 1);
    }

    setSelectedOption(id);
  };

  const handleNext = () => {
    currentQuestion < questions.length - 1
      ? setCurrentQuestion(currentQuestion + 1)
      : setCompleted(true);

    setSelectedOption(null);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(userAnswers[currentQuestion - 1] || null);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setCompleted(false);
    setUserAnswers([]);
  };

  return (
    <>
      <main>
        <h1>HTML & CSS QUIZ</h1>
        {completed ? (
          <FinalView
            score={score}
            questions={questions}
            userAnswers={userAnswers}
            handleRestart={handleRestart}
          />
        ) : (
          <Quiz
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            selectOption={selectOption}
            selectedOption={selectedOption}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Quiz;
