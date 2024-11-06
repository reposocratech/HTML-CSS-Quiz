import { InfoIcon } from '../../icons/InfoIcon';
import { marked } from 'marked';

import './info.css';

export const Info = ({ shuffleQuestions, currentQuestion }) => {
  return (
    <div className="info">
      <h3>
        <InfoIcon />
                  Información adicional
      </h3>
      <div dangerouslySetInnerHTML={{ __html: marked(shuffleQuestions[currentQuestion].additionalInfo) }} />
    </div>
  );
};
