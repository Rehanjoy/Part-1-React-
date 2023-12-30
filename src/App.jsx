import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from "./components/ProductListing";
import DetailedProduct from "./DetailedProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/detailed-product" element={<DetailedProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
