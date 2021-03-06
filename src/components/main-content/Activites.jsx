import React, { useState } from 'react';
import BookingSystem from '../booking/BookingSystem';
import Modal from '../modal/Modal';

const Activites = () => {
  const [show, setshow] = useState(false);

  const options = (
    <div className="col-lg-9">
      <div class="card-columns">
        <div class="card rounded box-shadow">
          <div class="card-body d-flex justify-content-center ">
            <button
              onClick={() => {
                setshow(true);
              }}
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#activitesModal"
            >
              <h3>Live Chat</h3>{' '}
              <img
                src="images/resources/171f47d5c18435cc865863d2e3fbc85b.jpg"
                className="rounded-circle"
              />
            </button>
          </div>
        </div>
        <div class="card rounded box-shadow">
          <div class="card-body d-flex justify-content-center ">
            <button class="btn btn-success">
              <h3>Greetings</h3>{' '}
              <img
                src="images/resources/171f47d5c18435cc865863d2e3fbc85b.jpg"
                className="rounded-circle"
              />
            </button>
          </div>
        </div>
        <div class="card rounded box-shadow">
          <div class="card-body d-flex justify-content-center ">
            <button class="btn btn-danger">
              <h3>Video Chat</h3>{' '}
              <img
                src="images/resources/171f47d5c18435cc865863d2e3fbc85b.jpg"
                className="rounded-circle"
              />
            </button>
          </div>
        </div>
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Hello Superstarts⭐</h5>
            <p class="card-text">Interact with your favorite superstar!!</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card rounded box-shadow">
          <div class="card-body d-flex justify-content-center ">
            <button class="btn btn-danger">
              <h3>Audio CHat</h3>{' '}
              <img
                src="images/resources/171f47d5c18435cc865863d2e3fbc85b.jpg"
                className="rounded-circle"
              />
            </button>
          </div>
        </div>
        <div class="card rounded box-shadow">
          <div class="card-body d-flex justify-content-center ">
            <button class="btn btn-danger">
              <h3>Learnings</h3>{' '}
              <img
                src="images/resources/171f47d5c18435cc865863d2e3fbc85b.jpg"
                className="rounded-circle"
              />
            </button>
          </div>
        </div>
        <div class="card rounded box-shadow">
          <div class="card-body d-flex justify-content-center ">
            <button class="btn btn-primary">
              <h3>Q&A</h3>{' '}
              <img
                src="images/resources/171f47d5c18435cc865863d2e3fbc85b.jpg"
                className="rounded-circle"
              />
            </button>
          </div>
        </div>
        {/* <!-- Modal --> */}
      </div>
    </div>
  );

  return show ? <BookingSystem /> : options;
  // return ;
};

export default Activites;
