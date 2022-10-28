import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        {/* <Route path={"/home"} element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
