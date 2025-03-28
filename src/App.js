import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { Routes,Route } from 'react-router-dom';

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;

    return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<News key="home" apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
          <Route path="/general" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
          <Route path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" />} />
          <Route path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />} />
        </Routes>
      </div>
    )
}

export default App;