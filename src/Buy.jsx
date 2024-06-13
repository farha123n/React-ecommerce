import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Buy = () => {
    const {sku}=useParams();
    const [products, setProducts] = useState([]);
    const [element,setElement]=useState([]);
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    useEffect(() => {
        // Only update element when products have been fetched
        if (products.length > 0) {
            const broughtProduct = products.find(item => item.sku === sku);
            setElement(broughtProduct);
        }
    }, [products, sku]);
    return (
        <div className="flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-80 h-72" src={element.image}
 alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{element.name}</h2>
    <p>category:{element.category}</p>
    <h2 className="font-bold">price:{element.price}</h2>
    <p>weight:{element.weight}</p>
    <p>organic:{element.organic}</p>
    <p>origin:{element.origin}</p>
    <p>available:{element.available}</p>
    <p>expiry_date:{element.expiry_date}</p>
    <p>sku:{element.sku}</p>
    <div className="card-actions justify-end">
     your product is selected
    </div>
  </div>
</div>
        </div>
    );
};

export default Buy;