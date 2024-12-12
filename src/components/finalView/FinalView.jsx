import { Results } from './results/Results';

import './finalView.css';
import { Dots } from './dots/Dots';
import { Score } from './score/Score';

export const FinalView = () => {
  return (
    <>
      <article className="quiz final-view">
        <Score />
        <Dots />
      </article>
      <Results />
    </>
  );
};
