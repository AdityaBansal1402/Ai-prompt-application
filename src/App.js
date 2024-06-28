import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Prompt from './components/Prompt';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='min-h-screen bg-zinc-900 text-white' >
      <Navbar/>
      <div className='flex justify-between'>
        <Sidebar />
        <Prompt />
      </div>
    </div>
  );
}

export default App;
