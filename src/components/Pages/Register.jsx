import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { setUser, createNewUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    console.log({ name, photo, email, password })

    // authentication start
    createNewUser(email, password)
      .then(result => {
        setUser(result.user)

        // profile start
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/')
          })
          .catch(err => {
            console.log(err.message)
          })
        // profile end
      })

      .catch(err => {
        alert(err.message)
      })
    // authentication end
  }


  return (
    <div className="flex flex-col  justify-center items-center min-h-screen">
      <h1 className='text-5xl font-bold mb-4'>Register Now</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-Url</span>
            </label>
            <input name='photo' type="text" placeholder="photo-url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-center text-lg p-2">Already have an account? <Link to={'/auth/login'} className="link text-blue-500">Login</Link> </p>
        </form>

      </div>
    </div>
  );
};

export default Register;