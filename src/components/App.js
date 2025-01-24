import '../index.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact'; 
import NotFoundPage from './NotFoundPage'; 
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


export default function App() {

  return (
    <div className="App text-center">
      <Header />
      <Router> {/* Это компонент, который обеспечивает маршрутизацию в приложении. */}
        <>
      <nav className="bg-black text-xl pt-10 pb-10">
        <ul className="flex justify-center space-x-4">
          <li>
            <NavLink to="/"
              className={({ isActive }) =>
                  isActive ? 'text-red-500' : 'text-white'
                }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"
              className={({ isActive }) =>
                  isActive ? 'text-red-500' : 'text-white'
                }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"
              className={({ isActive }) =>
                  isActive ? 'text-red-500' : 'text-white'
                }
            >
              Contact
            </NavLink>
          </li>
        </ul>
          </nav>
          
          <Routes> {/* Это набор путей, которые могут быть сопоставлены с URL-адресом и компонентом, который должен быть отображен, когда URL-адрес соответствует этому пути. */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} >
            <Route path="info" element={<div className='pt-2 text-blue-300 text-xl'>Info</div>} />
            </Route> 
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}
