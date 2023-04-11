import { useParams } from "react-router-dom"; //Parameter Hook is used here

function ProductScreen(){
      const params = useParams();
      const {slug} = params;

      return(
        <div>
            <h1>{slug}</h1>
        </div>
      )
}

export default ProductScreen;

