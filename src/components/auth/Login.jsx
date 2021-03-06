import React from 'react';
import AuthPageLeftPanel from './Auth-Page-Left-Panel';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  let history = useHistory();

  return (
    <>
      <div className="theme-layout">
        <div className="container-fluid pdng0">
          <div className="row merged">
            <AuthPageLeftPanel />
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="login-reg-bg">
                {/*Login Form*/}
                <div className="log-reg-area sign">
                  <h2 className="log-title">Login</h2>
                  <p>
                    Don’t use HelloSuperStars Yet?{' '}
                    <a href="#" title="">
                      Take the tour
                    </a>{' '}
                    or{' '}
                    <a href="#" title="">
                      Join now
                    </a>
                  </p>
                  <form method="post">
                    <div className="form-group">
                      <input type="text" id="input" required="required" />
                      <label className="control-label" htmlFor="input">
                        Username
                      </label>
                      <i className="mtrl-select" />
                    </div>
                    <div className="form-group">
                      <input type="password" required="required" />
                      <label className="control-label" htmlFor="input">
                        Password
                      </label>
                      <i className="mtrl-select" />
                    </div>
                    <a href="#" title="" className="forgot-pwd">
                      Forgot Password?
                    </a>
                    <div className="submit-btns">
                      <button
                        className="mtr-btn signin"
                        type="button"
                        onClick={() => history.push('/choose-category')}
                      >
                        <span>Login</span>
                      </button>
                    </div>
                  </form>

                  <p className="mt-2">
                    Don’t have any account Yet?{'  '}
                    <Link to="/register" title="">
                      Register now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
