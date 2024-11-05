import './buttons.css';

export const Buttons = ({currentQuestion, questions, selectedOption, handleNext, handlePrevious}) => {
  return (
    <div className="buttons">
      {currentQuestion > 0 && (
        <button onClick={handlePrevious}>Anterior</button>
      )}

      <button
        className={`${selectedOption === null ? 'disabled' : ''}`}
        disabled={selectedOption === null}
        onClick={handleNext}
      >
        {currentQuestion === questions.length - 1
          ? 'Finalizar'
          : 'Siguiente'}
      </button>
    </div>
  );
};
