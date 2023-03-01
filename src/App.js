import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Ministries from './Components/Ministries';
import Prayer from './Components/Prayer'
import Giving from './Components/Giving'
import Contact from './Components/Contact'
import Blogs from './Components/Blogs'
import Media from './Components/Media'
import Calender from './Components/Calender'
import Vision from './Components/Vision'
import Doctrine from './Components/Doctrine'
import Leadership from './Components/Leadership'



function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/leadership" element={<Leadership/>}></Route>
          <Route path="/doctrine" element={<Doctrine/>}></Route>
          <Route path="/vision" element={<Vision/>}></Route>
          <Route path="/ministries" element={<Ministries/>}></Route>
          <Route path="/prayer" element={<Prayer/>}></Route>
          <Route path="/Giving" element={<Giving/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/media" element={<Media/>}></Route>
          <Route path="/calender" element={<Calender/>}></Route>
          <Route path="/media" element={<Media/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>     
    </div>
  );
}

export default App;
