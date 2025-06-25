import React from 'react';
import AdminHeader from '../Header.jsx';

const Analytics_resource = () => {
  return (
    <>
    <style jsx>{`
        .table td .badge {
          margin-left: 5px;
        }
      `}</style>

    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
           <AdminHeader/>
        <div id="content"></div>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row" style={{ padding: '60px' }}>
              <div className="card">
                <div className="card-body">
                  <label className="badge badge-success" style={{ marginLeft: '970px' }}>Export CSV</label>
                  <h4 className="card-title">Most Views Resource List</h4>
                  <div className="table-responsive">
                    <table className="table table-striped" id="myTable">
                      <thead>
                        <tr>
                          <th>Resource Name</th>
                          <th>Reach</th>
                          <th>Created Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Business Analyst</td>
                          <td>450 Likes</td>
                          <td>12 May 2025</td>                         
                        </tr>
                        <tr>
                          <td>Communication</td>
                          <td>289 Likes</td>
                          <td>13 May 2025</td>                       
                        </tr>
                        <tr>
                          <td>Writer</td>
                          <td>267 Likes</td>
                          <td>14 May 2025</td>                  
                        </tr>
                        <tr>
                          <td>Editor</td>
                          <td>365 Likes</td>
                          <td>15 May 2025</td>                  
                        </tr>
                        <tr>
                          <td>Data Analyst</td>
                          <td>259 Likes</td>
                          <td>17 May 2025</td>                  
                        </tr>
                        <tr>
                          <td>Cybersecurity Expert</td>
                          <td>456 Likes</td>
                          <td>18 May 2025</td>                  
                        </tr>
                      </tbody>
                    </table>
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

export default Analytics_resource;