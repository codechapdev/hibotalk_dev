import React, {useState } from 'react';
import AdminHeader from '../Header';

const Analytics_bookings = () => {

    const [selectedDateFilter, setSelectedDateFilter] = useState('');

    function handleCustomChange(e){
       setSelectedDateFilter(e.target.value);
    }
   
    const isCustom = selectedDateFilter === 'custom';

  return (
    <>
    <style>
      {`
      .row {
        display: inline-flex !important;
        margin-left: calc(-0 * var(--bs-gutter-x));
      }
      .stretch-card{
          margin-left: 10px;
          width: 100%;
      }
      `}
    </style>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <AdminHeader/>
        <div className="main-panel">
          <div className="row">
            <div className="col-lg-2 d-flex flex-column">
              <select name="date"  onChange={handleCustomChange} id='mySelect' style={{height:`2.75rem`}} >
                <option value="">Select</option>
                <option className="dropdown-item" value="today">Today</option>
                <option className="dropdown-item" value="week">Week</option>
                <option className="dropdown-item" value="month">Month</option>
                <option className="dropdown-item" value="year">Year</option>
                <option className="dropdown-item" value="custom">Custom Date</option>
              </select>
            </div>
              {isCustom && (
                <>
                    <div className="col-lg-2 d-flex flex-column customedate">
                    <input type="date" className="form-control" />
                    </div>
                    <div className="col-lg-2 d-flex flex-column customedate">
                    <input type="date" className="form-control" />
                    </div>
                </>
                )}
          </div>
          <div className="content-wrapper">
            <div className="row">
              {[
                { title: 'Total Bookings Per Year', value: 8757 },
                { title: 'Total Cancellation', value: 1234 },
                { title: 'No So Bookings', value: 3459 },
              ].map((card, index) => (
                <div className="col-lg-3 d-flex flex-column" style={{width:'30%'}} key={index}>
                  <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                    <div className="card bg-primary card-rounded">
                      <div className="card-body pb-0">
                        <h4 className="card-title card-title-dash text-white mb-4">{card.title}</h4>
                        <div className="row">
                          <div className="col-sm-12">
                            <h2 className="text-info" style={{margin:'15px'}}>{card.value}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {[
              {
                title: 'Active Mentor',
                headers: ['Mentor Name', 'Mentor Email', 'No of Bookings'],
                rows: [
                  ['Jacob', 'Jacob@gmail.com', 1340],
                  ['Denny', 'Denny@gmail.com', 3890],
                  ['Jack', 'Jack@gmail.com', 1890],
                ],
              },
              {
                title: 'Active Mentee',
                headers: ['Mentee Name', 'Mentee Email', 'Taken Bookings'],
                rows: [
                  ['Jacob', 'Jacob@gmail.com', 12],
                  ['Denny', 'Denny@gmail.com', 16],
                  ['Jack', 'Jack@gmail.com', 45],
                ],
              },
              {
                title: 'Populer Category',
                headers: ['Category Name', 'Category Bookings'],
                rows: [
                  ['Lecturer', 1225],
                  ['Writer', 1689],
                  ['Data Analyst', 4546],
                  ['Data Scientist', 2468],
                  ['IT Support Specialist', 4689],
                ],
              },
            ].map((table, idx) => (
              <div className="row" key={idx}>
                <div className="col-lg-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{table.title}</h4>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              {table.headers.map((head, hIdx) => (
                                <th key={hIdx}>{head}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default Analytics_bookings;
