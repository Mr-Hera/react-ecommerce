// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
// import CustomersList from './components/CustomersList'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <>
      <NavBar />
      <ShoppingCart x="10" />
      {/* <CustomersList /> */}
    </>
  );
}

export default App;
