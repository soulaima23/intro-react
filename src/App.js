import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProductList/>
      <Footer/>
      

    </div>
  );
}

export default App;
