import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const BannerPhoto = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <section>
        <div className="feature-photo">
          <figure>
            <img src="/images/stars-images/sakib/sakib-banner-01.png" alt="" />

            <div
              className="modal fade"
              id="modal6"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-body mb-0 p-0">
                    <div className="embed-responsive embed-responsive-16by9 z-depth-1">
                      <video
                        width="320"
                        height="240"
                        className="embed-responsive-item"
                        controls
                      >
                        <source
                          src="images/stars-images/sakib/movie.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>

                  <div className="modal-footer justify-content-center">
                    <span className="mr-4">Spread the word!</span>
                    <a type="button" className="btn-floating btn-sm btn-fb">
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a type="button" className="btn-floating btn-sm btn-tw">
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a type="button" className="btn-floating btn-sm btn-gplus">
                      <i className="fab fa-google-plus-g"></i>
                    </a>

                    <a type="button" className="btn-floating btn-sm btn-ins">
                      <i className="fab fa-linkedin-in"></i>
                    </a>

                    <button
                      type="button"
                      className="btn btn-outline-primary btn-rounded btn-md ml-4"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="teaser"
              style={{
                position: 'fixed',
                width: '150px',
                height: '200px',
                top: '9rem',
                right: '20px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: ' 11px 10px 30px 0px rgba(0,0,0,0.63)',
                cursor: 'pointer',
                zIndex: '100',
                outline: 'rgb(240 211 116) solid 5px',
                border: '10px solid #0f0f0f',
                outlineOffset: '-5px',
              }}
            >
              <a
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  height: '100%',
                }}
              >
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  className="img-fluid z-depth-1"
                  src="images/stars-images/sakib/capture.jpg"
                  alt="video"
                  data-toggle="modal"
                  data-target="#modal6"
                />
              </a>
              <span
                style={{
                  fontSize: '50px',
                  color: 'rgb(212, 175, 55)',
                  pointerEvents: 'none',
                }}
                className="play-button-icon"
              >
                <i className="fa fa-play" aria-hidden="true"></i>
              </span>
            </div>
          </figure>
          <div className="add-btn">
            <span>1205 followers</span>
            <a href="/time-line" title="" data-ripple="">
              Follow
            </a>
          </div>
          {/* <form className="edit-phto">
            <i className="fa fa-camera-retro" />
            <label className="fileContainer">
              Edit Cover Photo
              <input type="file" />
            </label>
          </form> */}
          <div className="container-fluid">
            <div className="row merged">
              <div className="col-lg-2 col-sm-3">
                <div className="user-avatar">
                  <figure>
                    <img
                      src="/images/stars-images/sakib/sakib-profile-photo.jpg"
                      alt=""
                    />
                    {/* <form className="edit-phto">
                      <i className="fa fa-camera-retro"></i>
                      <label className="fileContainer">
                        Edit Display Photo
                        <input type="file" />
                      </label>
                    </form> */}
                  </figure>
                </div>
              </div>
              <div className="col-lg-10 col-sm-9">
                <div className="timeline-info">
                  <ul>
                    <li className="admin-name">
                      <h5>Sakib Al Hasan</h5>
                      {/*<span>Group Admin</span>*/}
                    </li>
                    {!url.split('/').includes('user') ? (
                      <li>
                        <Link to="/time-line/saakib">Time Line</Link>
                        <Link to="/timeline-photos/saakib">Photos</Link>
                        <Link to="/timeline-videos/saakib">Videos</Link>
                        {/* <Link to="/timeline-friends/saakib">Friends</Link>
                        <Link to="/timeline-groups/saakib">Groups</Link> */}
                        <Link to="/activites/saakib">
                          <a type="button" className="btn btn-primary btn-md">
                            Activites with Shakib
                          </a>
                        </Link>
                        <Link to="/shop?ss=shakib">
                          <a type="button" className="btn btn-primary btn-md">
                            Visit Shakib's Shop⭐
                          </a>
                        </Link>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerPhoto;
