import React from 'react';
import AdminHeader from '../Header.jsx';

const View_Resource = () => {
  return (
    <>
      <style jsx>{`
        .table td .badge {
          margin-left: 5px;
        }

      `}</style>

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
            <AdminHeader/>
          <div id="content"></div>
          <div className="main-panel">
            <div className="content-wrapper">
              <h2 className="card-title card-custom">Resource Data</h2>
              <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title text-primary">Category</h4>
                          <p className="text-capitalize">Category1</p>
                        </div>
                      </div>
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title text-danger">Heading</h4>
                          <p className="text-lowercase">Heading1</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title text-warning">Sub Heading</h4>
                          <p className="text-uppercase">Sub Heading1</p>
                        </div>
                      </div>
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title">Description</h4>
                          <p className="text-muted">
                            I am a dedicated and detail-oriented engineer with a strong foundation in
                            designing, analyzing, and implementing technical solutions. With hands-on experience in
                            problem-solving and innovation, I thrive in collaborative environments where technology and
                            creativity intersect. I'm passionate about continuous learning and contributing to impactful
                            projects that improve systems and user experience.
                          </p>
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
                          <h4 className="card-title text-success">Thumbnail icon</h4>
                          <img 
                            className="img-xs rounded-circle" 
                            src="../../assets/images/faces/face8.jpg" 
                            alt="Profile" 
                          />
                        </div>
                      </div>
                      <div className="col-md-6 grid-margin stretch-card">
                        <div className="card-body">
                          <h4 className="card-title text-info">File</h4>
                          <a href="../../assets/images/faces/face8.jpg" target="_blank" rel="noopener noreferrer">
                            View file
                          </a>
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

export default View_Resource;