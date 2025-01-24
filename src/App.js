import logoLight from './logo-light.svg';
import './index.css';

export default function App() {
  return (
    <div className="App text-center">
      <header className="App-header bg-white-800 min-h-screen flex flex-col items-center justify-center text-black text-[calc(10px+2vmin)]">
        <img src={logoLight} className="App-logo h-28 pb-8" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-link text-[#61dafb]">
          Learn React
        </p>
      </header>
    </div>
  );
}
