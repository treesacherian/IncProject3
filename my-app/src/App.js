import "./App.css";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Homepage/Home.jsx";
import PageForItem from "./Components/Item/PageForItem.jsx";
import CreateItemPage from "./Components/Item/CreateItemPage.jsx";
import BasketPage from "./Components/Basket/BasketPage.jsx";
import React from "react";
import Login from "./Components/Homepage/Login.jsx";
import EditItem from "./Components/Item/EditItem.jsx";
import Navbar from "./Components/Homepage/Navbar.jsx";
import ProtectedRoutes from "./Components/Homepage/ProtectedRoutes.js";
function App() {
  return (
    <div style={{ overflow: "auto" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route element={<Home />} path="/" />
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/items" element={<PageForItem />} />
          <Route path="/createitems" element={<CreateItemPage />} />
          <Route path="/editItem/:id" element={<EditItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
