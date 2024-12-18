import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';
import { IconArrowNarrowRightDashed } from '@tabler/icons-react';

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
        <IconArrowNarrowRightDashed stroke={2} />
        {currentQuestion === shuffleQuestions.length - 1
          ? 'Finalizar'
          : 'Siguiente'}
      </button>
    </div>
  );
};
