import { useEffect, useState } from "react";
import Service from "./Service";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    console.log(products?.length);

    return (
        <div className="">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center lg:justify-start mx-6">
                {products?.map(product => (
                    <Service key={product.sku} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Product;
