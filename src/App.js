import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListning from "./components/ProductListning";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListning />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/*" element={<div>404 Page not found!</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
