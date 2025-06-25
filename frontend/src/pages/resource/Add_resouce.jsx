import React from 'react';
import AdminHeader from '../Header.jsx';
const Add_resource = () => {
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
                      <h4 className="card-title">Add Resource</h4>
                      <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" className="form-control" id="category">
                          <option>--Select--</option>
                          <option value="category1">category1</option>
                          <option value="category2">category2</option>
                          <option value="category3">category3</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="heading">Heading</label>
                        <input type="text" className="form-control" id="heading" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subHeading">Sub Heading</label>
                        <input type="text" className="form-control" id="subHeading" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="thumbnail">Thumbnail icon</label>
                        <input type="file" className="form-control" id="thumbnail" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="file">File</label>
                        <input type="file" className="form-control" id="file" />
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

export default Add_resource;