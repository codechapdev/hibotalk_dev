import React, { useState } from 'react';
import AdminHeader from '../Header';
import { Link } from 'react-router-dom';

const List_bookings = () => {
  const [showReschedulePopup, setShowReschedulePopup] = useState(false);
  const [showRatingPopup, setShowRatingPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const bookings = [
    {
      id: 'HIBO4567',
      mentorName: 'Jacob',
      mentorEmail: 'Jacob@gmail.com',
      category: 'Category1',
      menteeName: 'Name1',
      menteeEmail: 'test1@gmail.com',
      resourceName: 'Resource1',
      timeZone: 'Europe/Paris',
      sessionDateTime: '12 May 2025 18:49',
      createdDate: '12 May 2025'
    },
    {
      id: 'HIBO7899',
      mentorName: 'Denny',
      mentorEmail: 'Denny@gmail.com',
      category: 'Category2',
      menteeName: 'Name2',
      menteeEmail: 'test2@gmail.com',
      resourceName: 'Resource2',
      timeZone: 'Europe/Paris',
      sessionDateTime: '13 May 2025 07:45',
      createdDate: '13 May 2025'
    },
    {
      id: 'HIBO4345',
      mentorName: 'Jack',
      mentorEmail: 'Jack@gmail.com',
      category: 'Category3',
      menteeName: 'Name3',
      menteeEmail: 'test3@gmail.com',
      resourceName: 'Resource3',
      timeZone: 'Europe/Paris',
      sessionDateTime: '14 May 2025 10:13',
      createdDate: '14 May 2025'
    }
  ];

  const filteredBookings = bookings.filter((booking) =>
    Object.values(booking).some((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredBookings.length / entriesToShow);
  const startIndex = (currentPage - 1) * entriesToShow;
  const endIndex = startIndex + entriesToShow;
  const visibleBookings = filteredBookings.slice(startIndex, endIndex);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      alert(`You selected:\nDate: ${selectedDate}\nTime: ${selectedTime}`);
      setShowReschedulePopup(false);
    } else {
      alert('Please select both date and time.');
    }
  };

  return (
    <>
    <style>{`
       /* DROPDOWN MENU */
.dropdownnew {
  position: relative;
  display: inline-block;
}


.dropdownnew-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: 180px;
  z-index: 100;
  display: none;
}

.dropdownnew-menu a {
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
}

.dropdownnew-menu a:hover {
  background-color: #f1f1f1;
}

/* OVERRIDE DISPLAY TO VISIBLE WHEN ACTIVE */
.dropdownnew .dropdownnew-menu[style*="display: block"] {
  display: block !important;
}

/* POPUP OVERLAY */
.popup-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  position: relative;
  text-align: center;
}

.popup h2 {
  margin-top: 0;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}



/* BUTTON STYLES */
.submit-btn {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #218838;
}

/* STAR RATING */
.star-rating {
  font-size: 2rem;
  color: gold;
  letter-spacing: 5px;
}

    `}</style>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" style={{ paddingTop: '25px' }}>
        <AdminHeader />
        <div id="content"></div>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row" style={{ padding: '60px' }}>
              <div className="card">
                <div className="card-body">
                  <span className="badge badge-success" style={{ float: 'right' }}>
                    Export CSV
                  </span>
                  <h4 className="card-title">Bookings List</h4>
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
                          <th>Booking ID</th>
                          <th>Mentor Name</th>
                          <th>Mentor Email</th>
                          <th>Category</th>
                          <th>Mentee Name</th>
                          <th>Mentee Email</th>
                          <th>Resource Name</th>
                          <th>Time/Zone</th>
                          <th>Session Date and Time</th>
                          <th>Booking Created Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visibleBookings.map((booking, index) => (
                          <tr key={index}>
                            <td>{booking.id}</td>
                            <td>{booking.mentorName}</td>
                            <td>{booking.mentorEmail}</td>
                            <td>{booking.category}</td>
                            <td>{booking.menteeName}</td>
                            <td>{booking.menteeEmail}</td>
                            <td>{booking.resourceName}</td>
                            <td>{booking.timeZone}</td>
                            <td>{booking.sessionDateTime}</td>
                            <td>{booking.createdDate}</td>
                            <td>
                              <div className="dropdownnew" tabIndex="0">
                                <button
                                  className="dropdownnew-toggle"
                                  onClick={() =>
                                    setActiveDropdown(activeDropdown === booking.id ? null : booking.id)
                                  }
                                >
                                  ⋮
                                </button>
                                <div
                                  className="dropdownnew-menu"
                                  style={{ display: activeDropdown === booking.id ? 'block' : 'none' }}
                                >
                                  <a href="#" onClick={() => { setShowRatingPopup(true); setActiveDropdown(null); }}>View Rating</a>
                                  <a href="#" onClick={() => { setShowReschedulePopup(true); setActiveDropdown(null); }}>Rescheduled Booking</a>
                                  <Link to="/pages/bookings/view-bookings" onClick={() => setActiveDropdown(null)}>View</Link>
                                  <a href="#" onClick={() => setActiveDropdown(null)}>Cancel</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {filteredBookings.length === 0 && <div>No results found.</div>}

                    <p className="entries-info">
                      Showing {filteredBookings.length === 0 ? 0 : startIndex + 1} to {Math.min(endIndex, filteredBookings.length)} of {filteredBookings.length} entries
                    </p>

                    <div className="pagination-container">
                      <div className="pagination-buttons">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>
                        <button className="active">{currentPage}</button>
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
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

      {/* Reschedule Popup */}
      {showReschedulePopup && (
        <div className="popup-overlay" onClick={() => setShowReschedulePopup(false)} style={{ display: 'flex' }}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowReschedulePopup(false)}>&times;</span>
            <h2>Rescheduled Booking</h2>
            <form onSubmit={handleSubmit}>
              <div className="star-rating">★★★★☆</div>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <input 
                type="time" 
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Rating Popup */}
      {showRatingPopup && (
        <div className="popup-overlay" onClick={() => setShowRatingPopup(false)} style={{ display: 'flex' }}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowRatingPopup(false)}>&times;</span>
            <h2>Ratings</h2>
            <form>
              <label>Rating</label>
              <div className="star-rating">★★★★☆</div>
              <label>Comment</label>
              <input type="text" name="comment" defaultValue="comment" />
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default List_bookings;
