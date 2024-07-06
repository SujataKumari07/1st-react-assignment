

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import FormComponent from './components/FormComponent';
import SuccessComponent from './components/SuccessComponent'; 

ReactDOM.render(
  <Router>
    <Routes> 
      <Route path="/" element={<FormComponent />} /> 
      <Route path="/success" element={<SuccessComponent />} /> 
    </Routes>
  </Router>,
  document.getElementById('root')
);
