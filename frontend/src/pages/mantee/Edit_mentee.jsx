import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './EditMentee.css'; // Optional custom styles
import AdminHeader from '../Header.jsx';

const EditMentee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
   
  return (
    <>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
            <AdminHeader/>

        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row" style={{ padding: '60px' }}>
              <div className="col-12 grid-margin stretch-card">
                <div className="card w-100">
                  <div className="card-body">
                    <h4 className="card-title">Edit Mentee Data</h4>
                    <form className="forms-sample" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" name="dob" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea className="form-control" id="bio" name="bio"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="improve">Looking to improve</label>
                        <textarea className="form-control" id="improve" name="improve"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="profilePhoto">Upload Profile Photo</label>
                        <input type="file" className="form-control" id="profilePhoto" name="file" />
                      </div>
                      <button type="submit" className="btn btn-primary me-2">Submit</button>
                      <button type="button" className="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer text-center mt-4">
            <span>© 2025. All rights reserved.</span>
          </footer>
        </div>
      </div>
    </div>
    </>
  );
  
};


export default EditMentee;
