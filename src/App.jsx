import logo from './logo.svg';
import './App.scss';
import { useBEM } from './hooks/useBEM';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './hooks/reduxHooks';
import { selectIsModalShow, selectView, setIsModalShow } from './store/slices/gameSlice';
import ScoreSect from './components/scoreSect/ScoreSect';
import Game from './components/game/Game';
import Results from './components/results/Results';
import RulesModal from './components/rulesModal/RulesModal';

function App() {
  const [B,E] = useBEM("App")
  const dispatch = useAppDispatch();

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
      {isModalShow && <RulesModal/>}
      <main className={E('body')}>
        <ScoreSect/>
        {changeView()}
      </main>
      <button onClick={() => {dispatch(setIsModalShow(true))}} className={E('rules-btn')}>RULES</button>
    </div>
  );
}

export default App;
