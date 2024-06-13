import Footere from "./Footere";
import Swipper from "./Swipper";
import Starter from "./Starter";
import Product from "../Product";
import Mapleaf from "./Provider/Mapleaf";
import { Helmet } from "react-helmet-async";




const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>bikrampur| home</title>
            </Helmet>
             <Swipper></Swipper>
             <Starter></Starter>
             <Product></Product>
             <Mapleaf></Mapleaf>
             <Footere></Footere>
             
        </div>
    );
};

export default Home;