import React, { useState } from 'react';
import AdminHeader from '../Header';

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    address: '',
    locationName: '',
    state: '',
    zipCode: '',
    country: '',
    username: '',
    password: '',
    totalPoints: '',
    ytdPoints: '',
    equipment: '',
    sessionName: '',
    planName: '',
    notes: '',
  });

  // Handle input change for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add submit logic like API call
  };

  const handleCancel = () => {
    // Clear the form or navigate away as needed
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      address: '',
      locationName: '',
      state: '',
      zipCode: '',
      country: '',
      username: '',
      password: '',
      totalPoints: '',
      ytdPoints: '',
      equipment: '',
      sessionName: '',
      planName: '',
      notes: '',
    });
  };

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
        <AdminHeader/>
        <div className="main-panel">
          <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="content-wrapper">
              <div className="row" style={{ padding: '60px' }}>
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Contact Information</h4>

                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                          id="gender"
                          name="gender"
                          className="form-control"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">--Select--</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Prefer Not to Say">Prefer Not to Say</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="locationName">Location Name</label>
                        <select
                          id="locationName"
                          name="locationName"
                          className="form-control"
                          value={formData.locationName}
                          onChange={handleChange}
                        >
                          <option value="">--Select--</option>
                          <option value="New York">New York</option>
                          <option value="Chicago">Chicago</option>
                          <option value="Las Vegas">Las Vegas</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <h4 className="card-title">Membership Plan / Status</h4>

                      <div className="form-group">
                        <label htmlFor="totalPoints">Total Points</label>
                        <input
                          type="text"
                          className="form-control"
                          id="totalPoints"
                          name="totalPoints"
                          value={formData.totalPoints}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="ytdPoints">YTD Points</label>
                        <input
                          type="text"
                          className="form-control"
                          id="ytdPoints"
                          name="ytdPoints"
                          value={formData.ytdPoints}
                          onChange={handleChange}
                        />
                      </div>

                      <h4 className="card-title">Booking History</h4>

                      <div className="form-group">
                        <label htmlFor="equipment">Equipment</label>
                        <input
                          type="text"
                          className="form-control"
                          id="equipment"
                          name="equipment"
                          value={formData.equipment}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="sessionName">Session Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="sessionName"
                          name="sessionName"
                          value={formData.sessionName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="planName">Plan Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="planName"
                          name="planName"
                          value={formData.planName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="notes">Notes Area</label>
                        <textarea
                          name="notes"
                          id="notes"
                          className="form-control"
                          value={formData.notes}
                          onChange={handleChange}
                        />
                      </div>

                      <button type="submit" className="btn btn-primary me-2">Submit</button>
                      <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
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

export default AddCustomer;
