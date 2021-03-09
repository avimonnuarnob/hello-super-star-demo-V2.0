import React, { useEffect } from 'react';

const BookingSystem = () => {
  useEffect(() => {
    if (window && window.bookingSystem) {
      window.bookingSystem();
    }
  }, []);
  return (
    <div className="col-9 col-sm-9 col-md-7 col-lg-9 col-xl-9 text-center p-0">
      <div className="card px-0 pt-4 pb-0">
        <h2 id="heading">Sign Up Your User Account</h2>
        <p>Fill all form field to go to next step</p>
        <form id="msform">
          <ul id="progressbar">
            <li className="active" id="account">
              <strong>Account</strong>
            </li>
            <li id="personal">
              <strong>Personal</strong>
            </li>
            <li id="payment">
              <strong>Image</strong>
            </li>
            <li id="confirm">
              <strong>Finish</strong>
            </li>
          </ul>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>{' '}
          <br />
          <br />
          <fieldset>
            <div className="form-card">
              <div className="row">
                <div className="col-7">
                  <h2 className="fs-title">Account Information:</h2>
                </div>
                <div className="col-5">
                  <h2 className="steps">Step 1 - 4</h2>
                </div>
              </div>{' '}
              <label htmlFor="event">Choose An Activity:</label>{' '}
              <select className="fieldlabels" name="event" id="event">
                {' '}
                <option value="liveChat">Live Chat</option>
                <option value="audioCall">Audio Call</option>
                <option value="videoChat">Video Chat</option>
                <option value="Q&A">Q & A</option>
              </select>
              <label className="fieldlabels" htmlFor="appointment">
                On Or After:
              </label>
              <input type="date" id="appointment" name="appointment" />
              <label htmlFor="ss">Choose Your Superstar:</label>{' '}
              <select className="fieldlabels" name="ss" id="ss">
                {' '}
                <option value="shakib">Shakib Al Hasan</option>
                <option value="jamal">Jamal Bhuiyan</option>
                <option value="porimoni">Porimoni</option>
                <option value="dev">Dev</option>
              </select>
            </div>{' '}
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
            />
          </fieldset>
          <fieldset>
            <div className="form-card">
              <div className="row">
                <div className="col-7">
                  <h2 className="fs-title">Personal Information:</h2>
                </div>
                <div className="col-5">
                  <h2 className="steps">Step 2 - 4</h2>
                </div>
              </div>{' '}
              <div className="">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">8.00 AM</h5>
                    <p className="card-text">1 time slot avilable</p>
                    <a href="#" className="btn btn-primary">
                      Book Appointment
                    </a>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">9.00 AM</h5>
                    <p className="card-text">1 time slot avilable</p>
                    <a href="#" className="btn btn-primary">
                      Book Appointment
                    </a>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">10.00 AM</h5>
                    <p className="card-text">0 time slot avilable</p>
                    <a href="#" className="btn btn-primary disabled">
                      Book Appointment
                    </a>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">12.00 PM</h5>
                    <p className="card-text">1 time slot avilable</p>
                    <a href="#" className="btn btn-primary">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>{' '}
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
            />{' '}
            <input
              type="button"
              name="previous"
              className="previous action-button-previous"
              value="Previous"
            />
          </fieldset>
          <fieldset>
            <div className="form-card">
              <div className="row">
                <div className="col-7">
                  <h2 className="fs-title">Account Information:</h2>
                </div>
                <div className="col-5">
                  <h2 className="steps">Step 3 - 4</h2>
                </div>
              </div>{' '}
              <label className="fieldlabels">Your Name: *</label>{' '}
              <input type="text" name="name" placeholder="Name" />{' '}
              <label className="fieldlabels">Your Email: *</label>{' '}
              <input type="email" name="email" placeholder="Email" />{' '}
              {/* <div className="d-flex">
                <div className="w-50">
                  <label className="fieldlabels">
                    Choose Payment Option: *
                  </label>{' '}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="cash"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      5000 Tk (60 USD)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="cpb"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Combo Bonus Point
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      value="cp"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      Club Point
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      value="cpm"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault4"
                    >
                      Club Point + Money
                    </label>
                  </div>
                </div>
                <div className="w-50">
                  <label className="fieldlabels">
                    Choose Payment Method: *
                  </label>{' '}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="cash"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      5000 Tk (60 USD)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="cpb"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Combo Bonus Point
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      value="cp"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      Club Point
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      value="cpm"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault4"
                    >
                      Club Point + Money
                    </label>
                  </div>
                </div>
              </div> */}
            </div>{' '}
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
            />
          </fieldset>
          <fieldset>
            <div className="form-card">
              <div className="row">
                <div className="col-7">
                  <h2 className="fs-title">Finish:</h2>
                </div>
                <div className="col-5">
                  <h2 className="steps">Step 4 - 4</h2>
                </div>
              </div>{' '}
              <br />
              <br />
              <h2 className="purple-text text-center">
                <strong>SUCCESS !</strong>
              </h2>{' '}
              <br />
              <div className="row justify-content-center">
                <div className="col-3">
                  {' '}
                  <img
                    src="https://i.imgur.com/GwStPmg.png"
                    className="fit-image"
                  />{' '}
                </div>
              </div>{' '}
              <br />
              <br />
              <div className="row justify-content-center">
                <div className="col-7 text-center">
                  <h5 className="purple-text text-center">
                    You Have Successfully Signed Up
                  </h5>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookingSystem;
