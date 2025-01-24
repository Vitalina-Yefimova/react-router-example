import '../index.css';
import logoLight from '../images/logo-light.svg';

export default function Header() {
  return (
    <header className="App-header bg-white-800 flex flex-col items-center justify-center text-black text-[calc(10px+2vmin)] pb-20 pt-20">
      <img src={logoLight} className="App-logo h-28" alt="logo" />
    </header>
  )
}