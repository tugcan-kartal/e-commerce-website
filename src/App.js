// import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductDetailsPage from "./components/ProductDetailsPage";

function App() {
  return (
    
    <Router>

      <div className="App">

        <Routes>

          <Route path="/" exact element={<HomePage />} />
          <Route path="/ProductDetails" element={<ProductDetailsPage />} />

        </Routes>

      </div>

    </Router>
    
    
  );
}

export default App;
