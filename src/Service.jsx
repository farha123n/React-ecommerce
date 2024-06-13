import { Link } from "react-router-dom";


const Service = ({product}) => {
    const {name,category,price,weight,organic,origin,available,expiry_date,sku,image}=product;
    return (
        <div>
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-80 h-72" src={image}
 alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>category:{category}</p>
    <h2 className="font-bold">price:{price}</h2>
    <p>weight:{weight}</p>
    <p>organic:{organic}</p>
    <p>origin:{origin}</p>
    <p>available:{available}</p>
    <p>expiry_date:{expiry_date}</p>
    <p>sku:{sku}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`product/${sku}`}>buy now</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;