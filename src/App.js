import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AI from './AI';
import Info from './Contexts/Info/Info';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <Info>
      <AI>
        <Router>
          <div className='scrollbar-thin scrollbar-track-customTrack scrollbar-thumb-customThumb'>
            <div className='min-h-screen max-h-screen bg-zinc-900 text-white !overflow-y-hidden' >
              <Navbar/>
              <div className='flex'>
                {/* <Sidebar /> */}
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/login' element={<Login />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </AI>
    </Info>
  );
}

export default App;
