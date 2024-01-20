import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppClass from './AppClass.jsx'
import './index.css'
import DataComponent from './components/Datacomponents.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={DataComponent}/>
    <AppClass data={DataComponent}/>
  </React.StrictMode>
);