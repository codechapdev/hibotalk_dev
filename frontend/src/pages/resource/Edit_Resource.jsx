import React from 'react';
import AdminHeader from '../Header.jsx';

const Edit_Resource = () => {
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
                      <h4 className="card-title">Edit Resource</h4>
                      <div className="form-group">
                        <label htmlFor="categoryInput">Category</label>
                        <select name="category" className="form-control" id="categoryInput">
                          <option>--Select--</option>
                          <option value="category1">category1</option>
                          <option value="category2">category2</option>
                          <option value="category3">category3</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="headingInput">Heading</label>
                        <input type="text" className="form-control" id="headingInput" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subHeadingInput">Sub Heading</label>
                        <input type="text" className="form-control" id="subHeadingInput" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="descriptionInput">Description</label>
                        <textarea className="form-control" id="descriptionInput"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="thumbnailInput">Thumbnail icon</label>
                        <input type="file" className="form-control" id="thumbnailInput" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fileInput">File</label>
                        <input type="file" className="form-control" id="fileInput" />
                      </div>
                      <button type="submit" className="btn btn-primary me-2">Submit</button>
                      <button className="btn btn-light">Cancel</button>
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

export default Edit_Resource;