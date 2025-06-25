import React from 'react';
import AdminHeader from '../Header';


const View_Community = () => {
  return (
    <>
    <style>{`
      .table td .badge {
        margin-left: 5px;
      }
        .card-custom {
          margin-bottom:10px;
          }
      
      `}
    </style>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <AdminHeader/>
        <div id="content"></div>
        <div className="main-panel">
          <div className="content-wrapper">
            <h2 className="card-title card-custom">Community Data</h2>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title text-primary">Title</h4>
                    <p className="text-capitalize">title1</p>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title text-danger">Description</h4>
                    <p className="text-lowercase">
                      I am a dedicated and detail-oriented engineer with a strong foundation in designing, analyzing, and implementing technical solutions. With hands-on experience in problem-solving and innovation, I thrive in collaborative environments where technology and creativity intersect. I'm passionate about continuous learning and contributing to impactful projects that improve systems and user experience.
                    </p>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title text-warning">Community Image</h4>
                    <img 
                      className="img-xs rounded-circle" 
                      src="../../assets/images/faces/face8.jpg" 
                      alt="Profile" 
                    />
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

export default View_Community;