import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from './testPage/TestPage.jsx'
import DragDropPage from './drag-dropPage.jsx'

export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="testPage" element={<TestPage />} />
          <Route path="dd" element={<DragDropPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <MainApp />
)