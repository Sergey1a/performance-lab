import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home/>}>

            </Route>
        </Route>
    </Routes>
  );
}

export default App;
