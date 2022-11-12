import logo from './logo.svg';
import './App.scss';
import { useBEM } from './hooks/useBEM';
import { useSelector } from 'react-redux';
import { selectIsModalShow, selectView } from './store/slices/gameSlice';
import ScoreSect from './components/scoreSect/ScoreSect';
import Game from './components/game/Game';
import Results from './components/results/Results';

function App() {
  const [B,E] = useBEM("App")

  const view = useSelector(selectView);
  const isModalShow = useSelector(selectIsModalShow);

  const changeView = () => {
    switch(view) {
      case 'game':
        return <Game/>
      case 'results':
        return <Results/>
    }
  }

  return (
    <div className={B()}>
      <main className={E('body')}>
        <ScoreSect/>
        {changeView()}
      </main>
    </div>
  );
}

export default App;
