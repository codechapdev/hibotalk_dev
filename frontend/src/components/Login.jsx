import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/Hibotalk_logo.png';
import axios from '../utils/axiosInstance';
import { toast } from 'react-toastify';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/admin/login',{email,password});
      
      // Store token and user info
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.data));
        toast.success(res.data.message)
        navigate('/admin')
    } catch (err) {
       toast.error(err?.response?.data?.message || 'Login failed');
    }
    
  };

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={logo} alt="logo" />
                </div>
                <h4>Hello! Let's get started</h4>
                <h6 className="fw-light">Sign in to continue .</h6>
                <form className="pt-3" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-3 d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-block btn-primary btn-lg fw-medium auth-form-btn"
                    >
                      SIGN IN
                    </button>
                  </div>
                   {/* <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input"> Keep me signed in
                      </label>
                    </div>
                    <a href="#" class="auth-link text-black">Forgot password?</a>
                  </div>  */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;