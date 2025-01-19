import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { setUser, createNewUser, updateUserProfile, loginWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    if (!passwordRegex.test(password)) {
      toast.error('password should be at least one uppercase, one lowercase and 6 character long')
      return
    }

    // authentication start
    createNewUser(email, password)
      .then(result => {
        setUser(result.user)

        // profile start
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/')
            toast.success('Account created successfully')
          })
          .catch(err => {
            console.log(err.message)
          })
        // profile end
      })

      .catch(err => {
        toast.error(err.code)
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
        toast.error(err.code)
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
            <p onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12 cursor-pointer">
              {
                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
              }
            </p>
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