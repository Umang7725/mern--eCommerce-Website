// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

// import data from "./data";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/COntainer';
import {LinkContainer} from 'react-router-bootstrap';


function App() {
  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>
        <Navbar bg='dark' variant='dark'>
          <Container >
            <LinkContainer to="/">
            <Navbar.Brand>UmangCart</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
        {/* <Link to="/">UmangCart</Link> */}
      </header>
      <main>
        <Container>
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

