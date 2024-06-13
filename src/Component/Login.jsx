import { useState, useRef, useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import {  sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase.config";
import { AuthContext } from "./Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const provider_git = new GithubAuthProvider();
    const navigate=useNavigate();
    const [showPassword,setShowpassword]=useState(false);
    const [user,setUser]= useState({});
     const {signInUser}=useContext(AuthContext);
     const provider = new GoogleAuthProvider();
     const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result => {
          const loginUser = result.user;
          console.log(loginUser);
          setUser(loginUser);
          navigate('/');
        })
        .catch(error => {
          console.log("error",error.message);
        })
     };
 const gitHubLogin=(e)=>{
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      console.log(credential);
      setUser(result.user);
      navigate('/');
    }).catch((error) => {
    
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(credential);
  
      // ...
    });
 }

    const handleLogin = e => {
        e.preventDefault();
     

        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then(result=>{
            
         
            console.log("successful",result.user);
            e.target.reset();
           
            navigate('/');
            toast.success("login successful");
        })
        .catch(error=>{
            toast.error(error.message);
        });
     
    };

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log("Please enter your email address");
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log("Please enter a valid email address");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Password reset email sent successfully");
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const emailRef = useRef(null);

    return (
        
      <div>
        <Helmet>
            <title>Login</title>
         </Helmet>
        
               <div>
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
</div>
         
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                           <div className="flex relative">
                           <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />
                            <button type="button" className="absolute right-4 top-5" onClick={()=>setShowpassword(!showPassword)}>{!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</button>
                           </div>

                            <label className="label">
                                <span className="label-text-alt link link-hover" onClick={handleForgetPassword}>Forgot password?</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                         <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div>
                        <button onClick={handleGoogleSignIn} className="mx-4 text-red-400">Google Login</button>
                        
                        <button onClick={gitHubLogin} className="mx-4 text-blue-400">Github Login</button>
                        
                        </div>
                    </form>
                
                    <p>Not registered? Click <Link to="/register" className="text-red-500">Register</Link></p>
                 
                </div>
            </div>
        </div>
      </div>
    );
};

export default Login;
