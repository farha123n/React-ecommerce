
import { updateProfile } from 'firebase/auth';
import auth from '../firebase.config';
import { Helmet } from 'react-helmet-async';

const Update = () => {
    const Update=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
      const photo_url = form.get('photo_url');
        updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo_url
          })
    }
   
    return (
        <div>
          <Helmet>
            <title>update</title>
          </Helmet>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Update Profile</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={Update} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="photo_url" placeholder="Photo_url" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Update;