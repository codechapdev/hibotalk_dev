
//import './View.css';
import AdminHeader from "../Header";
import { Link } from "react-router-dom";

const View = () => {
  
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <AdminHeader/>
        <div id="content"></div>
        <div className="main-panel">
          <div className="row">
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
            <div className="col-md-2 grid-margin stretch-card">
              <button type="button" className="btn btn-warning">
                <Link className="nav-link" to="/pages/community/list">Community Data</Link>
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <h2 className="card-title">Mentor Data</h2>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-primary">Name</h4>
                        <p className="text-capitalize  p-margin">Jacob</p>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-danger">Email</h4>
                        <p className="text-lowercase">Jacob@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-warning">Phone Number</h4>
                        <p className="text-uppercase">9045789011</p>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title">Date of Birth</h4>
                        <p className="text-muted">12 May 1989</p>
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
                        <h4 className="card-title text-success">Specialization</h4>
                        <p>software developer</p>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-info">Qualification</h4>
                        <p className="text-capitalize">Engineering</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title">Experience</h4>
                        <p className="text-muted">3 years</p>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-success">Id Type</h4>
                        <p>Passport</p>
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
                        <h4 className="card-title text-info">Id Number</h4>
                        <p className="text-capitalize">CPMYT679P</p>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title">Bio</h4>
                        <p className="text-muted bio-text"> I am a dedicated and detail-oriented engineer with a strong foundation in designing, analyzing, and implementing technical solutions. With hands-on experience in problem-solving and innovation, I thrive in collaborative environments where technology and creativity intersect. I’m passionate about continuous learning and contributing to impactful projects that improve systems and user experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card-body">
                        <h4 className="card-title text-success">Profile Image</h4>
                        <img
                          className="img-xs rounded-circle"
                          src="../../assets/images/faces/face8.jpg"
                          alt="Profile image"
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
              <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">
                Copyright © 2025. All rights reserved.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default View;
