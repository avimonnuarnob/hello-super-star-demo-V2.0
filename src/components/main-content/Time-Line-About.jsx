import React from 'react';

const TimeLineAbout = () => {
  return (
    <div className="col-lg-9">
      <div className="central-meta">
        <div className="about">
          <div className="personal">
            <h5 className="f-title">
              <i className="ti-info-alt"></i> Personal Info
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="d-flex flex-row mt-2">
            <ul className="nav nav-tabs nav-tabs--vertical nav-tabs--left">
              <li className="nav-item">
                <a href="#basic" className="nav-link active" data-toggle="tab">
                  Basic info
                </a>
              </li>
              <li className="nav-item">
                <a href="#location" className="nav-link" data-toggle="tab">
                  location
                </a>
              </li>
              <li className="nav-item">
                <a href="#work" className="nav-link" data-toggle="tab">
                  work and education
                </a>
              </li>
              <li className="nav-item">
                <a href="#interest" className="nav-link" data-toggle="tab">
                  interests
                </a>
              </li>
              <li className="nav-item">
                <a href="#lang" className="nav-link" data-toggle="tab">
                  languages
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="basic">
                <ul className="basics">
                  <li>
                    <i className="ti-user"></i>sarah grey
                  </li>
                  <li>
                    <i className="ti-map-alt"></i>live in Dubai
                  </li>
                  <li>
                    <i className="ti-mobile"></i>+1-234-345675
                  </li>
                  <li>
                    <i className="ti-email"></i>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="661f0913140b070f0a26030b070f0a4805090b"
                    >
                      [email&nbsp;protected]
                    </a>
                  </li>
                  <li>
                    <i className="ti-world"></i>www.yoursite.com
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="work" role="tabpanel">
                <div>
                  <a href="#" title="">
                    Envato
                  </a>
                  <p>work as autohr in envato themeforest from 2013</p>
                  <ul className="education">
                    <li>
                      <i className="ti-facebook"></i> BSCS from Oxford
                      University
                    </li>
                    <li>
                      <i className="ti-twitter"></i> MSCS from Harvard Unversity
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="interest" role="tabpanel">
                <ul className="basics">
                  <li>Footbal</li>
                  <li>internet</li>
                  <li>photography</li>
                </ul>
              </div>
              <div className="tab-pane fade" id="lang" role="tabpanel">
                <ul className="basics">
                  <li>english</li>
                  <li>french</li>
                  <li>spanish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineAbout;
