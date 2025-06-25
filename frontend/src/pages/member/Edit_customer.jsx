import { useEffect } from "react";
import AdminHeader from "../Header";




const EditCustomer = () => {
  useEffect(() => {

    // Load external scripts dynamically
    const scripts = [
      '../../assets/vendors/js/vendor.bundle.base.js',
      '../../assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js',
      '../../assets/js/off-canvas.js',
      '../../assets/js/template.js',
      '../../assets/js/settings.js',
      '../../assets/js/hoverable-collapse.js',
      '../../assets/js/todolist.js'
    ];

    const scriptElements = scripts.map((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    // Cleanup on component unmount
    return () => {
      scriptElements.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

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
                      <h4 className="card-title">Contact Information</h4>

                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="specialization">Specialization</label>
                        <input type="text" className="form-control" id="specialization" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="qualification">Qualification</label>
                        <input type="text" className="form-control" id="qualification" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="experience">Experience</label>
                        <input type="text" className="form-control" id="experience" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="idType">ID Type</label>
                        <input type="text" className="form-control" id="idType" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="idNumber">ID Number</label>
                        <input type="text" className="form-control" id="idNumber" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="identityProof">Identity Proof</label>
                        <input type="file" className="form-control" id="identityProof" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="profilePic">Profile Pic</label>
                        <input type="file" className="form-control" id="profilePic" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea className="form-control" id="bio" />
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

export default EditCustomer;
