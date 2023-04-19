import { useEffect, useReducer } from "react";

// import data from "../data";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>UmangCart</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          // <div>Loading...</div>
          <LoadingBox/>
        ) : error ? (
          // <div> {error}</div>
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (

              <Col key={product.slug} sm={6} md={4} lg={3} className='mb-3'>
               <Product product={product}></Product>
            </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;

// "Link to" is replaced with "a href" to avoid refreshing of multipage
// Using Axios Now, as it fetch data from backend
// We changed line 18, from "data.products.map()" to just products.map(). As,
// we don't require static data from "data", we are fetching data from backend.
