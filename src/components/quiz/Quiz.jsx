import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { Answers } from './answers/Answers';
import { Buttons } from './buttons/Buttons';
import { Info } from './info/Info';

import './quiz.css';

export const Quiz = () => {
  const { currentQuestion, shuffleQuestions, selectedOption } =
    useContext(QuizContext);

  return (
    <article className="quiz">
      <span className="badge">
        {currentQuestion + 1} / {shuffleQuestions.length}
      </span>

      <h2 className="question-title">
        {shuffleQuestions[currentQuestion].question}
      </h2>

      <Answers />

      {selectedOption > 0 && <Info />}

      <Buttons />
    </article>
  );
};
