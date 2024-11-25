import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';
import { Answer } from '../answer/Answer';

import './answers.css';

export const Answers = () => {
  const { shuffleQuestions, currentQuestion } = useContext(QuizContext);

  return (
    <div className="answers">
      {shuffleQuestions[currentQuestion].options.map((option) => (
        <Answer key={option.id} option={option} />
      ))}
    </div>
  );
};
