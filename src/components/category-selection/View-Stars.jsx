import React from 'react';
import { Link } from 'react-router-dom';

const ViewStars = ({ history }) => {
  const super_stars = [
    {
      name: 'Sakib Al Hasan',
      photo: 'sakib.png',
    },
    {
      name: 'Tamim Iqbal',
      photo: 'tamim.png',
    },
    {
      name: 'Shafid Afridi',
      photo: 'afridi.png',
    },
    {
      name: 'MS Dhoni',
      photo: 'dhoni.png',
    },
    {
      name: 'Sourav Ganguly',
      photo: 'ganguly.png',
    },
  ];

  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Super Stars</h1>
        </div>
      </section>

      <div className="album py-2 bg-light">
        <div className="container">
          <div className="row">
            {super_stars.map((star) => (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    src={`/images/category-images/sports-category-stars/${star.photo}`}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      <Link to="/time-line/saakib">{star.name}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 mb-5" style={{ marginLeft: '45%' }}>
            <button
              className="btn btn-lg btn-outline-dark"
              onClick={history.goBack}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewStars;
