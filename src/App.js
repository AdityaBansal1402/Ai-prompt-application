import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AI from './AI';

function App() {
  return (
    <div className='scrollbar-thin scrollbar-track-customTrack scrollbar-thumb-customThumb'>
      <AI>
        <div className='min-h-screen max-h-screen bg-zinc-900 text-white !overflow-y-hidden' >
          <Navbar/>
          <div className='flex'>
            {/* <Sidebar /> */}
            <Home/>
          </div>
        </div>
      </AI>
    </div>
  );
}

export default App;
