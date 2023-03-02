import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Vanilla from "./pages/products/Vanilla"
import Mug from "./pages/products/Mug"
import Beans from "./pages/products/Beans"
import Checkout from "./pages/Checkout"
import Confirmation from "./pages/Confirmation"

function App() {
  return (
    <div>
    <HashRouter baseurl="/">
      <NavBar />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/vanilla' element={<Vanilla />} />
        <Route path='/mug' element={<Mug />} />
        <Route path='/beans' element={<Beans />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;