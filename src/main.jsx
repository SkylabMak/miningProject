import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import TestPage from './testPage/TestPage.jsx'
import DragDropPage from './drag-dropPage.jsx'
import Home from './Page/HomePage.jsx';
import HR from './Page/Hr/HR.jsx';
import Emp from './Page/Emp/Emp.jsx';
import Print from './Page/Hr/Print.jsx';
import ResultPass from './Page/Emp/ResultPass.jsx';
import ResultDidnPass from './Page/Emp/ResultDidnPass.jsx';

function HRRoutes() {
  return (
    <>
      <Outlet />
    </>
  );
}

function EmpRoutes() {
  return (
    <>
      <Outlet />
    </>
  );
}


export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="testPage" element={<TestPage />} />
        <Route path="dd" element={<DragDropPage />} />
        <Route path="hr" element={<HRRoutes />}>
          <Route index element={<HR />} />
          <Route path="print" element={<Print />} />
        </Route>
        <Route path="Emp" element={<EmpRoutes />}>
          <Route index element={<Emp />} />
          <Route path="resultPass" element={<ResultPass />} />
          <Route path="resultUnpass" element={<ResultDidnPass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainApp />
)