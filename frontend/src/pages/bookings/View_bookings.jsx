import React from 'react';
import AdminHeader from '../Header';

const View_bookings = () => {
  return (
    <>
    <style>{`
        .table td .badge {
          margin-left: 5px;
        }
          .card-custom {
          margin-bottom:10px;
          }
      `}</style>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <AdminHeader/>
        <div className="main-panel">
          <div className="content-wrapper">
            <h2 className="card-title  card-custom">Booking Data</h2>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-primary">Booking ID</h4>
                        <p className="text-capitalize">HIBO4567</p>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-primary">Mentor Name</h4>
                        <p className="text-capitalize">Jacob</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-danger">Mentor Email</h4>
                        <p className="text-lowercase">Jacob@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title">Category</h4>
                        <p className="text-muted">Category1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-success">Mentee Name</h4>
                        <p>Denny</p>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-info">Mentee Email</h4>
                        <p className="text-capitalize">Denny@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title">Resorce Name</h4>
                        <p className="text-muted">Resorce1</p>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-success">Session Date and Time</h4>
                        <p>13 May 2025 07:45</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">
                Copyright © 2025. All rights reserved.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
    </>
  );
};

export default View_bookings;
