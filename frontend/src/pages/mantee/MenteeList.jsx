import React, { useState } from 'react';
import AdminHeader from '../Header';
import { Link } from 'react-router-dom';

const MenteeList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);

  const allMentees = [
    {
      name: 'Denny',
      dob: '13 May 1989',
      email: 'Denny@gmail.com',
      goal: 'Get Feedback and Mentorship',
      platform: 'IOS',
      created: '12 May 2025',
      status: 'Active',
    },
    {
      name: 'Jack',
      dob: '14 May 1989',
      email: 'Jack@gmail.com',
      goal: 'Upskill Strategically',
      platform: 'Android',
      created: '12 May 2025',
      status: 'InActive',
    },
    {
      name: 'Brock',
      dob: '03 June 1989',
      email: 'Brock@gmail.com',
      goal: 'Identify Areas to Improve',
      platform: 'IOS',
      created: '12 May 2025',
      status: 'Active',
    },
  ];

  const filteredMentees = allMentees.filter((mentee) =>
    Object.values(mentee).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const visibleMentees = filteredMentees.slice(0, entriesToShow);

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
        <AdminHeader />
        <div id="content"></div>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row" style={{ padding: '60px' }}>
              <div className="card w-100">
                <div className="card-body">
                  <label className="badge bg-success" style={{ float: 'right' }}>Export CSV</label>
                  <h4 className="card-title">Mentee Data</h4>

                  <div className="table-responsive">
                    <div className="d-flex justify-content-between align-items-center mt-5">
                      <div>
                        Show&nbsp;
                        <select value={entriesToShow} onChange={(e) => setEntriesToShow(Number(e.target.value))}>
                          {[5, 10, 20, 50].map((n) => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                        &nbsp;entries
                      </div>
                      <div>
                        Search:&nbsp;
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <table className="table table-striped" id="myTable">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Date of Birth</th>
                          <th>Email</th>
                          <th>Looking to improve</th>
                          <th>Platform</th>
                          <th>Created</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visibleMentees.map((mentee, index) => (
                          <tr key={index}>
                            <td>{mentee.name}</td>
                            <td>{mentee.dob}</td>
                            <td>{mentee.email}</td>
                            <td>{mentee.goal}</td>
                            <td>{mentee.platform}</td>
                            <td>{mentee.created}</td>
                            <td>{mentee.status}</td>
                            <td style={{ position: 'relative' }}>
                              <div className="dropdownnew" tabIndex={0}>
                                <button className="dropdownnew-toggle">⋮</button>
                                <div className="dropdownnew-menu">
                                  <Link to="/pages/mantee/edit-mantee">Edit</Link>
                                  <Link to="/pages/mantee/view-mantee">View</Link>
                                  <a href="#">Delete</a>
                                  <a href="#">Block</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {filteredMentees.length === 0 && <div>No results found.</div>}
                    <p className="entries-info">
                      Showing {filteredMentees.length === 0 ? 0 : 1} to {Math.min(entriesToShow, filteredMentees.length)} of {filteredMentees.length} entries
                    </p>
                    <div className="pagination-container">
                      <div className="pagination-buttons">
                        <button disabled>Previous</button>
                        <button className="active">1</button>
                        <button disabled>Next</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <footer className="footer text-center mt-4">
              <span>Copyright© 2025. All rights reserved.</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeList;
