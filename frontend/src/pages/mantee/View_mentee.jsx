import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../Header.jsx'; 

const MenteeData = () => {
  return (
    <div className="with-welcome-text">
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
            <AdminHeader/>
          <div id="content"></div>
          <div className="main-panel">
            <div className="row" style={{ width: '120%' }}>
              <div className="col-md-2 grid-margin stretch-card">
                <button type="button" className="btn btn-primary">Profile</button>
              </div>
              <div className="col-md-2 grid-margin stretch-card">
                <button type="button" className="btn btn-secondary">
                  <Link className="nav-link" to="/pages/resource/list">Resource</Link>
                </button>
              </div>
              <div className="col-md-2 grid-margin stretch-card">
                <button type="button" className="btn btn-success">
                  <Link className="nav-link" to="/pages/bookings/list">Booking Data</Link>
                </button>
              </div>
            </div>
            <div className="content-wrapper">
              <h2 className="card-title ">Mentee Data</h2>
              <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title text-primary">Name</h4>
                          <p className="text-capitalize">Jacob</p>
                        </div>
                      </div>
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title text-danger">Email</h4>
                          <p className="text-lowercase"> Jacob@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title">Date of Birth</h4>
                          <p className="text-muted">12 May 1989 </p>
                        </div>
                      </div>
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title">Bio</h4>
                          <p className="text-muted">I am a dedicated and detail-oriented engineer with a strong foundation in
                            designing, analyzing, and implementing technical solutions. With hands-on experience in
                            problem-solving and innovation, I thrive in collaborative environments where technology and
                            creativity intersect. I'm passionate about continuous learning and contributing to impactful
                            projects that improve systems and user experience.</p>
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
                          <h4 className="card-title text-success">Looking to improve</h4>
                          <p> Identify Areas to Improve </p>
                        </div>
                      </div>
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title text-info">Profile Pic</h4>
                          <img 
                            className="img-xs rounded-circle" 
                            src="/assets/images/faces/face8.jpg" 
                            alt="Profile" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">Copyright © 2025. All rights
                  reserved.</span>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Identical CSS from original */}
      <style jsx>{`
        .table td .badge {
          margin-left: 5px;
        }
        .col-md-2 {
          margin: 0px -110px 0px 20px;
        }
        .btn {
          font-size: 12px !important;
          width: 70%;
          height: 100%;
        }
        .nav-link {
          color: inherit;
          text-decoration: none;
          display: block;
        }
        .btn-secondary .nav-link,
        .btn-success .nav-link {
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default MenteeData;