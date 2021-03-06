import React from 'react';
import AuthPageLeftPanel from './Auth-Page-Left-Panel';
import { Link } from 'react-router-dom';

const Register = () => {
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
                  <h2 className="log-title">Register</h2>
                  <p>
                    Don’t use Winku Yet?{' '}
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
                      <input type="text" required="required" />
                      <label className="control-label" htmlFor="input">
                        First & Last Name
                      </label>
                      <i className="mtrl-select" />
                    </div>

                    <div className="form-group">
                      <input type="text" required="required" />
                      <label className="control-label" htmlFor="input">
                        User Name
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

                    <div className="form-radio">
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio" checked="checked" />
                          <i className="check-box" />
                          Male
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio" />
                          <i className="check-box" />
                          Female
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <input type="text" required="required" />
                      <label className="control-label" htmlFor="input">
                        Enter Email
                      </label>
                      <i className="mtrl-select" />
                    </div>

                    <div className="submit-btns">
                      <button className="mtr-btn signup" type="button">
                        <span>Register</span>
                      </button>
                    </div>
                  </form>

                  <p className="mt-2">
                    Already have any account?{'  '}
                    <Link to="/" title="">
                      Login
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

export default Register;
