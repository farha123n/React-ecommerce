import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Helmet } from "react-helmet-async";



const UserProfile = () => {
    const {user}=useContext(AuthContext);
    return (
        <div className="flex justify-center items-center">
            <Helmet>
                <title>Profile</title>
            </Helmet>
          <div>
            <p className="text-7xl">user Profile</p>
            <div className="items-center justify-center flex">
            <img className="w-32 h-32" src={user.photoURL} alt="" />
            </div>
            <p className="text-2xl">User Name: {user.displayName}</p>
            <p>email:{user.email}</p>
            
            </div>   
        </div>
    );
};

export default UserProfile;