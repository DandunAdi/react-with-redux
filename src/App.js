import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function App() {

  const account = useSelector(state => state.account)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h2>{account}</h2>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      <button onClick={() => depositMoney(100)}>Deposit</button>
    </div>
  );
}

export default App;
