import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
