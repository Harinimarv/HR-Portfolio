import React from 'react';
import './App.css';
import Introduction from './components/Introduction/introduction.jsx';
import TopNavigationPanel from './components/TopNavigationPanel/topNavigationPanel.jsx';

function App() {
  return (
    <div className="App">
      <TopNavigationPanel />
      <Introduction />
    </div>
  );
}

export default App;
