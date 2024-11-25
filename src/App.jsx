import { QuizContextProvider } from './context/QuizContextProvider.jsx';
import { Header } from './components/header/Header';
import { Game } from './components/quiz/game/Game';
import { Footer } from './components/footer/Footer';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <QuizContextProvider>
        <Game />
      </QuizContextProvider>
      <Footer />
    </>
  );
};
export default App;
