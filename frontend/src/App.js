import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import UserDetails from "./pages/UserDetails";
import Men from "./pages/Men";
import Women from "./pages/Women";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
