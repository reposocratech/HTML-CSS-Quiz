import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';
import './buttons.css';

export const Buttons = () => {
  const { currentQuestion, shuffleQuestions, selectedOption, handleNext } =
    useContext(QuizContext);

  return (
    <div className="buttons">
      <button
        className={`${selectedOption === null ? 'disabled' : ''}`}
        disabled={selectedOption === null}
        onClick={handleNext}
      >
        {currentQuestion === shuffleQuestions.length - 1
          ? 'Finalizar'
          : 'Siguiente'}
      </button>
    </div>
  );
};
