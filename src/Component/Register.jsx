import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from 'firebase/auth';
import auth from "../firebase.config";
import { Helmet } from "react-helmet-async";


  
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  let err;
  const handleRegister = (e) => {
      e.preventDefault();
      setRegisterError('');
      setSuccess('');
      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
       
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
      const name = form.get('name');
      const photo_Url = form.get('photo_url');
      console.log(name);
      console.log(photo_Url);
      if (!email) {
        console.log("Please enter your email address");
        toast.error("Please enter your email address");
        return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("Please enter a valid email address");
        toast.error("Please enter a valid email address");
        return;
    }
    else if(!regex.test(password)){
    err=" password must have an uppercase must have an lower case  must be more than 6 letters";
    console.log(err);
    toast.error(err);

    return;
    }
      // Use createUser function from AuthContext
      createUser(email, password)
         .then(result=>{
          console.log(result.user);
          updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo_Url
          })
         }) ;
         toast.success("registration successful");
            
  };
    return (
        <div>
          <Helmet>
            <title>register</title>
          </Helmet>
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <div className="text-3xl">hello register</div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name="name" placeholder="email" className="input input-bordered" required />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" name="photo_url" placeholder="Photo Url " className="input input-bordered" />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        </form>
        {registerError && <p className="text-red-700">{registerError}</p>}
                    {success && <p className="text-green-600">{success}</p>}
        </div>
      
    </div>
  </div>
</div>
       
    );
};

export default Register;