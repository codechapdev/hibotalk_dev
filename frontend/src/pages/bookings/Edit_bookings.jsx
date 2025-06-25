import React from 'react';
import AdminHeader from '../Header';

const Edit_bookings = () => {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
          <AdminHeader/>
        <div className="main-panel">
          <form className="forms-sample">
            <div className="content-wrapper">
              <div className="row" style={{ padding: '60px' }}>
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">View Bookings</h4>

                      <div className="form-group">
                        <label htmlFor="mentorName">Mentor Name</label>
                        <input type="text" className="form-control" id="mentorName" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="mentorEmail">Mentor Email</label>
                        <input type="text" className="form-control" id="mentorEmail" />
                      </div>

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
                        <label htmlFor="menteeName">Mentee Name</label>
                        <input type="text" className="form-control" id="menteeName" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="menteeEmail">Mentee Email</label>
                        <input type="text" className="form-control" id="menteeEmail" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="resourceName">Resource Name</label>
                        <input type="text" className="form-control" id="resourceName" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="sessionDateTime">Session Date and Time</label>
                        <input type="date" className="form-control" id="sessionDateTime" />
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

export default Edit_bookings;
