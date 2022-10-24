import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';

// import App from './App';
// import Counter from './Counter';
// import NeSpeed from './NeSpeed';
import WeatherApp from './WeatherApp';
import reportWebVitals from './reportWebVitals';

// const display = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-around',
//   flexWrap: 'wrap',
// };
function App() {
  return <WeatherApp />;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {console.log('render')} */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
