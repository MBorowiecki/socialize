import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as firebase from 'firebase/app';
import './styles/main.scss';

import { firebaseConfig } from './config/firebase';
import Login from './pages/Login';
import Home from './pages/Home';

if (firebase.getApps().length <= 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
