import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/products/Products";
import ProductsById from "./pages/products/ProductsById";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/productbyid" element={<ProductsById />} />
      </Routes>
    </>
  );
}

export default App;
