import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { setUser, login, loginWithGoogle, resetPassword } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const emailRef = useRef()

  // form function
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    if (password.length < 6) {
      toast('password must be at least 6 character')
      return
    }
    console.log(email, password)

    //login
    login(email, password)
      .then(result => {
        setUser(result.user)
        navigate(location?.state ? location.state : '/')
      })
      .catch(err => {
        toast.error(err.code)
      })
  }

  const handleGoogle = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result.user)
        navigate(location?.state ? location.state : '/')
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const handleForgetPassword = () => {
    const email = emailRef.current.value
    if (!email) {
      toast('please provide a valid email address')
    }
    else {
      resetPassword(email)
      .then(()=>{
        toast('password reset email send, please check your email')
      })

    }
  }

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100  shrink-0 p-5 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input ref={emailRef} name='email' type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center text-lg">New here? <Link to={'/auth/register'} className="link text-blue-500">Registration</Link> first </p>
          <button onClick={handleGoogle} className="btn mt-4"><FaGoogle></FaGoogle> Contionue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;