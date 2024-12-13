import { useState, useMemo } from 'react';
import { QuizContext } from './QuizContext';
import { questions } from '../data/questions';
import confetti from 'canvas-confetti';

export const QuizContextProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const shuffleQuestions = useMemo(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  }, []);

  const selectOption = (id) => {
    const { correctAnswer } = shuffleQuestions[currentQuestion];
    const isCorrect = id === correctAnswer;

    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, id]);

    if (isCorrect) {
      confetti({
        startVelocity: 50,
        particleCount: 10,
        gravity: 10,
      });
      setScore((score) => score + 1);
    }

    setSelectedOption(id);
  };

  const handleNext = () => {
    if (currentQuestion < shuffleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
      confetti({
        particleCount: 150,
        spread: 360,
        origin: { y: 0.3, x: 0.5 },
      });
    }

    setSelectedOption(null);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setCompleted(false);
    setUserAnswers([]);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        selectedOption,
        setSelectedOption,
        score,
        setScore,
        completed,
        setCompleted,
        userAnswers,
        setUserAnswers,
        shuffleQuestions,
        selectOption,
        handleNext,
        handleRestart,
        setShowResults,
        showResults,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
