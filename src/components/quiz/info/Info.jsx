import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';
import { InfoIcon } from '../../icons/InfoIcon';
import { marked } from 'marked';

import './info.css';

export const Info = () => {
  const { currentQuestion, shuffleQuestions } = useContext(QuizContext);

  return (
    <div className="info">
      <h3>
        <InfoIcon />
        Información adicional
      </h3>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(shuffleQuestions[currentQuestion].additionalInfo),
        }}
      />
    </div>
  );
};
