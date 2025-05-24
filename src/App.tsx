import React from 'react';
import logo from './assets/images/logo.svg';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex flex-col items-center justify-center min-h-screen p-4">
        <img 
          src={logo} 
          className="w-64 h-64 animate-spin" 
          alt="logo" 
        />
        <p className="mt-4 text-xl text-gray-700 font-notosans">
          Edit <code className="bg-gray-200 p-1 rounded font-skranji">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="mt-4 text-blue-500 hover:text-blue-700 transition-colors"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; 