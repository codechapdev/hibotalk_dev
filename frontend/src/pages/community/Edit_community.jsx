import React from 'react';
import AdminHeader from '../Header';

const Edit_community = () => {
  return (
    
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
        <AdminHeader/>
        <div id="content"></div>
        <div className="main-panel">
          <form className="forms-sample">
            <div className="content-wrapper">
              <div className="row" style={{ padding: '60px' }}>              
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Edit Community</h4>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Title</label>
                        <input type="text" className="form-control" id="exampleInputName1" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Description</label>
                        <textarea className="form-control" id="exampleInputName1"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputmodal1">Community Image</label>
                        <input type="file" className="form-control" id="exampleInputmodal1" />
                      </div>
                      <button type="submit" className="btn btn-primary me-2">Submit</button>
                      <button type="button" className="btn btn-light">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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

export default Edit_community;