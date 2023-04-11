// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom';

// import data from "./data";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">UmangCart</Link>
      </header>
      <main>
        <Routes>
          <Route path='/product/:slug' element ={<ProductScreen/>} />
          <Route path='/' element={<HomeScreen/>} />
        </Routes>
        
      </main>
    </div>
  </BrowserRouter>
    );

}

export default App;

// We Have Use Two ROute here, HomeScreen and ProductScreen

