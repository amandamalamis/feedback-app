import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

//npm start
//import createRoot  from 'react-dom/client';
//const container = document.getElementById('app');
//const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// ReactDOM.render(
//     <React.StrictMode> 
//     <App />
//     </React.StrictMode>, 
//     document.getElementById('root')
// )