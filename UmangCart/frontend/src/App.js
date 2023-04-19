// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom';

// import data from "./data";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/COntainer';
import {LinkContainer} from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';


function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>
        <Navbar bg='dark' variant='dark'>
          <Container >
            <LinkContainer to="/">
            <Navbar.Brand>UmangCart</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav>
          </Container>
        </Navbar>
        {/* <Link to="/">UmangCart</Link> */}
      </header>
      <main>
        <Container className='mt-3'>
        <Routes>
          <Route path='/product/:slug' element ={<ProductScreen/>} />
          <Route path='/' element={<HomeScreen/>} />
        </Routes>
        </Container>
      </main>
      <footer>
        <div className='text-center'>©️Created by Umang Raj LPU 12018505</div>
      </footer>
    </div>
  </BrowserRouter>
    );

}

export default App;

// We Have Use Two ROute here, HomeScreen and ProductScreen

