import React from 'react';
import './App.css';

class DisplayContent extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">Welcome to React!</h1>
        <p className="paragraph">
          This is a React class component. The heading and paragraph are styled
          using CSS. You can further customize these styles as needed.
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <DisplayContent />
    </div>
  );
}

export default App; 