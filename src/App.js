import logo from './logo.svg';
import './App.css';
import StoreInput from './components/StoreInput';
import ResultLink from './components/ResultLink';
import { useState } from "react";

function App() {

  const [store, setStore] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <StoreInput store={store} setStore={setStore} />
      <ResultLink store={store} setStore={setStore} />
    </div>
  );
}

export default App;
