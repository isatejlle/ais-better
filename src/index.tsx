import './styles.css';
import React from 'react';
import Header from './Header';
import ActionButton from './ActionButton';
import PreviewSection from './PreviewSection';
import ScoreSection from './ScoreSection';
import MindApp from './MindApp';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MindApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
