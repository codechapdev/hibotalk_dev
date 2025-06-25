import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../Header.jsx';

const ResourceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const allResources = [
    { category: 'Category1', heading: 'Heading1', subHeading: 'Sub Heading1', created: '12 May 2025' },
    { category: 'Category2', heading: 'Heading2', subHeading: 'Sub Heading2', created: '13 May 2025' },
    { category: 'Category3', heading: 'Heading3', subHeading: 'Sub Heading3', created: '13 May 2025' }
  ];

  const filteredResources = allResources.filter((resource) =>
    Object.values(resource).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredResources.length / entriesToShow);
  const startIndex = (currentPage - 1) * entriesToShow;
  const visibleResources = filteredResources.slice(startIndex, startIndex + entriesToShow);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleEntriesChange = (e) => {
    setEntriesToShow(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1 on change
  };

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
                  <h4 className="card-title">Resource List</h4>
                      
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
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Heading</th>
                          <th>Sub Heading</th>
                          <th>Created</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visibleResources.length === 0 ? (
                          <tr><td colSpan="5">No results found.</td></tr>
                        ) : (
                          visibleResources.map((resource, index) => (
                            <tr key={index}>
                              <td>{resource.category}</td>
                              <td>{resource.heading}</td>
                              <td>{resource.subHeading}</td>
                              <td>{resource.created}</td>
                              <td style={{ position: 'relative' }}>
                                <div className="dropdownnew" tabIndex={0}>
                                  <button className="dropdownnew-toggle">⋮</button>
                                  <div className="dropdownnew-menu">
                                    <Link to="/pages/resource/edit-resource">Edit</Link>
                                    <Link to="/pages/resource/view-resource">View</Link>
                                    <Link to="">Delete</Link>
                                    <Link to="">Block</Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>

                    <p className="entries-info">
                      Showing {filteredResources.length === 0 ? 0 : startIndex + 1} to {Math.min(startIndex + entriesToShow, filteredResources.length)} of {filteredResources.length} entries
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
  );
};

export default ResourceList;
