// App.js
import React from 'react';
import SolutionProvider from './components/SolutionProvider.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Base Shear Calculator</h1>
      </header>
      <main className="container mx-auto mt-4">
        <SolutionProvider />
      </main>
    </div>
  );
}

export default App;
