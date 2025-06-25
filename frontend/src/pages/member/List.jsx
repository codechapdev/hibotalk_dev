import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './List.css';
import AdminHeader from '../Header';

const List = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);

  const allMembers = [
    {
      name: 'Jacob',
      email: 'Jacob@gmail.com',
      phone: '9045789011',
      dob: '12 May 1989',
      specialization: 'software developer',
      qualification: 'Engineering',
      experience: '3 years',
      idType: 'Pasport',
      idNumber: 'CPMYT679P',
      platform: 'IOS',
      status: 'Active',
      created: '12 May 2025'
    },
    {
      name: 'Denny',
      email: 'Denny@gmail.com',
      phone: '9045689011',
      dob: '13 May 1989',
      specialization: 'cardiology',
      qualification: 'Medical',
      experience: '3 years',
      idType: 'Pasport',
      idNumber: 'LOMYT679P',
      platform: 'Android',
      status: 'Active',
      created: '12 May 2025'
    },
    {
      name: 'Jack',
      email: 'Jack@gmail.com',
      phone: '9078889011',
      dob: '12 June 1989',
      specialization: 'software developer',
      qualification: 'Engineering',
      experience: '3 years',
      idType: 'Pasport',
      idNumber: 'CMPYT679P',
      platform: 'IOS',
      status: 'InActive',
      created: '12 May 2025'
    }
  ];

  const filteredMembers = allMembers.filter((member) =>
    Object.values(member).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const visibleMembers = filteredMembers.slice(0, entriesToShow);

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
        <AdminHeader />
        <div id="content"></div>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row" style={{ padding: '60px' }}>
              <div className="card">
                <div className="card-body">
                  <label className="badge badge-success" style={{ float: 'right' }}>Export CSV</label>
                  <h4 className="card-title">Members List</h4>
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
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Date of Birth</th>
                          <th>Specialization</th>
                          <th>Qualification</th>
                          <th>Experience</th>
                          <th>Id Type</th>
                          <th>Id Number</th>
                          <th>Platform</th>
                          <th>Status</th>
                          <th>Created</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visibleMembers.map((member, index) => (
                          <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.phone}</td>
                            <td>{member.dob}</td>
                            <td>{member.specialization}</td>
                            <td>{member.qualification}</td>
                            <td>{member.experience}</td>
                            <td>{member.idType}</td>
                            <td>{member.idNumber}</td>
                            <td>{member.platform}</td>
                            <td>{member.status}</td>
                            <td>{member.created}</td>
                            <td style={{ position: 'relative' }}>
                              <div className="dropdownnew" tabIndex={0}>
                                <button className="dropdownnew-toggle">⋮</button>
                                <div className="dropdownnew-menu">
                                  <Link to="/pages/member/edit-customer">Edit</Link>
                                  <Link to="/pages/member/view-customer">View</Link>
                                  <a href="#">Delete</a>
                                  <a href="#">Block</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {filteredMembers.length === 0 && <div>No results found.</div>}
                    <p className="entries-info">
                      Showing {filteredMembers.length === 0 ? 0 : 1} to {Math.min(entriesToShow, filteredMembers.length)} of {filteredMembers.length} entries
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
  );
};

export default List;