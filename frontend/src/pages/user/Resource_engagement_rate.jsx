import React, { useState } from 'react';
import AdminHeader from '../Header';

const Resource_engagement_rate = () => {
  const [showCustomDate, setShowCustomDate] = useState(false);

  const handleSelectChange = (e) => {
    setShowCustomDate(e.target.value === 'custom');
  };

  return (
    <>
      <style>{`
        .dashboard {
          font-family: Arial, sans-serif;
          max-width: 1000px;
          margin: auto;
          padding: 20px;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          justify-self: right;
          margin-top: -70px;
        }

        .filters {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filters select {
          padding: 0.5rem 4rem;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .stat-boxes {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .stat-box {
          flex: 1;
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          border: 1px solid #ddd;
        }

        .stat-box p {
          margin: 0;
          font-weight: bold;
        }

        .stat-box span {
          font-weight: normal;
        }

        .stat-box strong {
          display: block;
          margin-top: 10px;
          font-size: 24px;
        }

        .center-box {
          background-color: #e5e7eb;
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .resource-table {
          width: 100%;
          margin-top: 30px;
          border-collapse: collapse;
          font-size: 15px;
        }

        .resource-table thead {
          background-color: #f2f2f2;
        }

        .resource-table th,
        .resource-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
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
                    <h4 className="card-title" style={{paddingBottom:'36px'}}>Dashboard Overview</h4>
                    <div className="dashboard">
                      <div className="dashboard-header">
                        <div className="filters">
                          <div>
                            <select className="select-box" name="date" id="mySelect" onChange={handleSelectChange}>
                              <option>Select</option>
                              <option className="dropdown-item">Today</option>
                              <option className="dropdown-item">week</option>
                              <option className="dropdown-item">Month</option>
                              <option className="dropdown-item">Year</option>
                              <option className="dropdown-item" value="custom">Custom Date</option>
                            </select>
                          </div>
                          <div>
                            {showCustomDate && (
                              <>
                                <div className="customedate">
                                  <input type="date" className="form-control" />
                                </div>
                                <div className="customedate">
                                  <input type="date" className="form-control" />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="stat-boxes">
                        <div className="stat-box">
                          <p>Total Users<br /><span>/Views</span></p>
                          <strong>X</strong>
                        </div>
                        <div className="stat-box">
                          <p>Total Engagement<br /><span>Rate</span></p>
                          <strong>X%</strong>
                        </div>
                        <div className="stat-box">
                          <p>Total Completion<br /><span>Rate</span></p>
                          <strong>X%</strong>
                        </div>
                      </div>

                      <table className="resource-table">
                        <thead>
                          <tr>
                            <th>Resource Name</th>
                            <th>Type</th>
                            <th>Views</th>
                            <th>Click Rate (%)</th>
                            <th>Completion</th>
                            <th>Last Updated</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>(1) Resume Guide 101</td>
                            <td>Article</td>
                            <td>1,204</td>
                            <td>45%</td>
                            <td>90%</td>
                            <td>May 15, 2025</td>
                          </tr>
                          <tr>
                            <td>(2) Interview Training</td>
                            <td>Video</td>
                            <td>892</td>
                            <td>38%</td>
                            <td>72%</td>
                            <td>May 10, 2025</td>
                          </tr>
                          <tr>
                            <td>(3) Call Center Roles</td>
                            <td>Job Ad</td>
                            <td>2,430</td>
                            <td>51%</td>
                            <td>-</td>
                            <td>May 18, 2025</td>
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

export default Resource_engagement_rate;