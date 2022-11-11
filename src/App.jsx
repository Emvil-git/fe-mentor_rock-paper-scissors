import logo from './logo.svg';
import './App.scss';
import { useBEM } from './hooks/useBEM';

function App() {
  const [B,E] = useBEM("App")

  return (
    <div className={B()}>
    </div>
  );
}

export default App;
