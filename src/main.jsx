import { render } from 'preact';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app';
import './index.css';

function Init() {
  return (
    <Router>
      <App />
    </Router>
  );
}

render(<Init />, document.getElementById('laporkeun-app'));
