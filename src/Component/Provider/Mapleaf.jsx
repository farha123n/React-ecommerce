
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Mapleaf.css";
import "leaflet/dist/leaflet.css";



const Mapleaf = () => {
    return (
        <div className="flex justify-center items-center">
         <div className="p-28">
          <p className="text-green-700 text-5xl font-bold my-10 text-center">map of bikrampur market</p>
         <MapContainer center={[23.23, 90.10]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.23, 90.10]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
         </div>
        </div>
    );
};

export default Mapleaf;
