import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/main.scss' // Pour le Style

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <Router>
        <App />
    </Router>
)