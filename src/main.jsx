import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from './testPage/TestPage.jsx'

export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="testPage" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <MainApp />
)