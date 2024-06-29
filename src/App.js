import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <div className='min-h-screen bg-zinc-900 text-white' >
      <Navbar/>
      <div className='flex'>
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
