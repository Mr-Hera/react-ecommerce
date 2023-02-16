// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CustomersList from './components/CustomersList'
import ShoppingCart from './components/ShoppingCart'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NoMatchFound from './components/NoMatchFound'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/shopping-cart" exact element={<ShoppingCart />} />
        <Route path="/customer-list" exact element={<CustomersList />} />
        <Route path="*" element={<NoMatchFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
