import React, { useState } from 'react';
import AdminHeader from '../Header';
import { Link } from 'react-router-dom';

const List_community = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts = [
    { title: "title1", comment: "Comment1", likes: 450, created: "12 May 2025" },
    { title: "title2", comment: "Comment2", likes: 789, created: "13 May 2025" },
    { title: "title3", comment: "Comment3", likes: 354, created: "14 May 2025" },
   
  ];

  const filteredPosts = allPosts.filter((post) =>
    Object.values(post).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredPosts.length / entriesToShow);
  const startIndex = (currentPage - 1) * entriesToShow;
  const visiblePosts = filteredPosts.slice(startIndex, startIndex + entriesToShow);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <style>
        {`
          .table td .badge {
            margin-left: 5px;
          }
        `}
      </style>

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
          <AdminHeader />
          <div id="content"></div>
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row" style={{ padding: '60px' }}>
                <div className="card w-100">
                  <div className="card-body">
                    <label className="badge badge-success" style={{ float: 'right' }}>Export CSV</label>
                    <h4 className="card-title">Community List</h4>

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
                            <th>Posted Title</th>
                            <th>Posted Comment</th>
                            <th>Like Count</th>
                            <th>Created</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {visiblePosts.length === 0 ? (
                            <tr><td colSpan="5">No results found.</td></tr>
                          ) : (
                            visiblePosts.map((post, index) => (
                              <tr key={index}>
                                <td>{post.title}</td>
                                <td>{post.comment}</td>
                                <td>{post.likes}</td>
                                <td>{post.created}</td>
                                <td style={{ position: 'relative' }}>
                                  <div className="dropdownnew" tabIndex="0">
                                    <button className="dropdownnew-toggle">⋮</button>
                                    <div className="dropdownnew-menu">
                                      <Link to="/pages/community/edit-community">Edit</Link>
                                      <Link to="/pages/community/view-community">View</Link>
                                      <a href="#">Delete</a>
                                      <a href="#">Block</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>

                      <p className="entries-info">
                        Showing {filteredPosts.length === 0 ? 0 : startIndex + 1} to {Math.min(startIndex + entriesToShow, filteredPosts.length)} of {filteredPosts.length} entries
                      </p>

                      <div className="pagination-container">
                        <div className="pagination-buttons">
                          <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
                          <button className="active">{currentPage}</button>
                          <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
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
    </>
  );
};

export default List_community;
