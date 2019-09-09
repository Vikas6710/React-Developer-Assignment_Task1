import React from 'react';
import logo from './logo.svg';
import './App.css';
import LatestPost from './PostData/latestPost'
import FooterContent from './Footer/footerContent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import homeTabData from "./PostData/HomeTabData"
import singleData from './PostData/SingleData';
import categoryData from './PostData/CategoryData'

function App() {
  return (
    <div className="App">
      <Router>
      <LatestPost/>
      <Route path="/home" component={homeTabData} />
      <Route path="/single" component={singleData} />
      <Route path="/category" component={categoryData} />
      <FooterContent/>
      </Router>
    </div>
  );
}

export default App;
