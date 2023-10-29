import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Prividers/AuthProvider';
import axios from 'axios';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        


        signIn(email, password)
        .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          const user = { email }
        
          console.log(user);
          axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
          .then(res => {
            console.log(res.data);
            if(res.data.success){
                navigate(location?.state ? location?.state : '/' )
            }
          })


        })
        .catch(error => console.error(error ))
    }
    
    

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content space-x-20 flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <h1 className="text-3xl font-bold pt-3 pl-3">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='my-4 text-center'>New to this ? Please <Link className='text-red-500 font-bold ' to='/signUp'>Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
