import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';
import { FinalView } from '../../finalView/FinalView';
import { Quiz } from '../Quiz';

export const Game = () => {
  const { completed } = useContext(QuizContext);

  return (
    <main>
      <div className="container">{completed ? <FinalView /> : <Quiz />}</div>
    </main>
  );
};
