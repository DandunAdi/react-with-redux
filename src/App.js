import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux"

function App() {

  const account = useSelector(state => state.account)

  return (
    <div className="App">
      <h2>{account}</h2>
    </div>
  );
}

export default App;
