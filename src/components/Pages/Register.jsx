import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { setUser, createNewUser, updateUserProfile, loginWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState([])
  console.log(location)


  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    if (password.length < 5) {
      setError('password should be at least 6 character long')
      return
    }
    console.log({ name, photo, email, password })

    // authentication start
    createNewUser(email, password)
      .then(result => {
        setError()
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
        console.log(err.message)
      })
    // authentication end
  }

  const handleGoogle = () => {
    loginWithGoogle()
      .then(result => {
        setUser(result.user)
        navigate('/')
      })
      .catch(err => {
        console.log(err.message)
      })
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
            {
              error && <p className='text-sm text-red-500'>{error}</p>
            }
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-center text-lg">Already have an account? <Link to={'/auth/login'} className="link text-blue-500">Login</Link> </p>
          <button onClick={handleGoogle} className="btn mt-4"><FaGoogle></FaGoogle> Contionue With Google</button>

        </form>

      </div>
    </div>
  );
};

export default Register;