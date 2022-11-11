import logo from './logo.svg';
import './App.scss';
import { useBEM } from './hooks/useBEM';
import { useSelector } from 'react-redux';
import { selectIsModalShow, selectView } from './store/slices/gameSlice';

function App() {
  const [B,E] = useBEM("App")

  const view = useSelector(selectView);
  const isModalShow = useSelector(selectIsModalShow);

  return (
    <div className={B()}>
    </div>
  );
}

export default App;
