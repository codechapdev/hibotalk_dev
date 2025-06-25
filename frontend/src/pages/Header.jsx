import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = ({ showGreeting = false }) => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCustomDateVisible, setIsCustomDateVisible] = useState(false);

  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleCollapse = (id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('show');
  };

  const handleSelectChange = (e) => {
    setIsCustomDateVisible(e.target.value === 'custom');
  };

  return (
    <div>
      <style>{`
          .sidebar {
            background: #F4F5F7;
            width: 310px;
            transition: width 0.3s ease;
          }

          .sidebar.minimized {
            width: 70px;
          }

         

          .sidebar + .main-panel {
            transition: margin-left 0.3s ease;
            margin-left: 310px;
          }

          .sidebar.minimized + .main-panel {
            margin-left: 70px;
          }


          .dropdownnew:hover .dropdownnew-menu,
        .dropdownnew:focus-within .dropdownnew-menu {
          display: block;
        }
        .dropdownnew-menu {
          display: none;
          position: absolute;
          right: 0;
          top: 100%;
          background-color: white;
          border: 1px solid #ccc;
          min-width: 120px;
          z-index: 999;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .dropdownnew-menu a {
          display: block;
          padding: 8px 12px;
          text-decoration: none;
          color: black;
          white-space: nowrap;
        }
        .dropdownnew-menu a:hover {
          background-color: #f0f0f0;
        }
      `}</style>

      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <div className="me-3">
           
          </div>
          <div>
            <Link className="navbar-brand brand-logo" to="/">
              <img src="/assets/images/Hibotalk_logo.png" alt="logo" />
            </Link>
            <Link className="navbar-brand brand-logo-mini" to="/">
              <img src="/assets/images/Hibotalk_logo.png" alt="logo" />
            </Link>
          </div>
          
        </div>
         <div></div>
        <div className="navbar-menu-wrapper d-flex align-items-top w-100 justify-content-between" style={{margin:'-100px 0px 0px 250px'}}>
          {showGreeting && (
            <ul className="navbar-nav">
              <li className="nav-item fw-semibold d-none d-lg-block ms-0">
                <h1 className="welcome-text" style={{ marginLeft: '30px' }}>
                  Good Morning, <span className="text-black fw-bold">Admin</span>
                </h1>
              </li>
            </ul>
          )}

          <ul className="navbar-nav ms-auto d-flex align-items-center">
            {showGreeting && (
              <>
                <li className="nav-item">
                  <select
                    onChange={handleSelectChange}
                    style={{
                      border: '1px solid #ccc',
                      padding: '10px 40px 10px 15px',
                      fontSize: '16px',
                      borderRadius: '8px',
                      marginRight: '10px',
                    }}
                  >
                    <option value="">Select</option>
                    <option value="today">Today</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                    <option value="custom">Custom Date</option>
                  </select>
                </li>
                {isCustomDateVisible && (
                  <>
                    <li className="nav-item d-none d-lg-block">
                      <input type="date" className="form-control" />
                    </li>
                    <li className="nav-item d-none d-lg-block">
                      <input type="date" className="form-control" />
                    </li>
                  </>
                )}
              </>
            )}

            <li className="nav-item dropdownnew d-none d-lg-block user-dropdown">
              <button className="nav-link dropdownnew-toggle">
                <img className="img-xs rounded-circle" src="/assets/images/faces/face8.jpg" alt="Profile" />
              </button>
              <div className="dropdownnew-menu navbar-dropdown show" aria-labelledby="UserDropdown">
                <Link className="dropdown-item" to="#">
                  <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My Profile
                </Link>
                <Link className="dropdown-item" to="/">
                  <i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i> Sign Out
                </Link>
              </div>
            </li>
          </ul>

          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleMobileMenu}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>

      <div className="container-fluid page-body-wrapper">
        <nav className="sidebar sidebar-offcanvas" >
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <i className="mdi mdi-grid-large menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={() => toggleCollapse('user-elements')}>
                <i className="menu-icon mdi mdi-card-text-outline"></i>
                <span className="menu-title">User & Session Management</span>
                <i className="menu-arrow"></i>
              </button>
              <div className="collapse" id="user-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><Link className="nav-link" to="/pages/user/conversion-funnel">User Conversion Funnel</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/pages/user/session-completion-rate">Session Completion Rate</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/pages/user/matching-success-rate">Matching Success Rate</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/pages/user/resource-engagement-rate">Resource Engagement Rate</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={() => toggleCollapse('ui-basic')}>
                <i className="menu-icon mdi mdi-floor-plan"></i>
                <span className="menu-title">Mentor Management</span>
                <i className="menu-arrow"></i>
              </button>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><Link className="nav-link" to="/pages/member/list">Members</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={() => toggleCollapse('form-elements')}>
                <i className="menu-icon mdi mdi-card-text-outline"></i>
                <span className="menu-title">Mentee Management</span>
                <i className="menu-arrow"></i>
              </button>
              <div className="collapse" id="form-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><Link className="nav-link" to="/pages/mantee/list">Mentee Data</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={() => toggleCollapse('resouce-elements')}>
                <i className="menu-icon mdi mdi-card-text-outline"></i>
                <span className="menu-title">Resource Management</span>
                <i className="menu-arrow"></i>
              </button>
              <div className="collapse" id="resouce-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><Link className="nav-link" to="/pages/resource/list">Resource Data</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/pages/resource/add-resource">Add Resource</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/pages/resource/analytics">Resource Analytics</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={() => toggleCollapse('community-elements')}>
                <i className="menu-icon mdi mdi-card-text-outline"></i>
                <span className="menu-title">Community Management</span>
                <i className="menu-arrow"></i>
              </button>
              <div className="collapse" id="community-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><Link className="nav-link" to="/pages/community/list">Community Data</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={() => toggleCollapse('booking-elements')}>
                <i className="menu-icon mdi mdi-card-text-outline"></i>
                <span className="menu-title">Booking Management</span>
                <i className="menu-arrow"></i>
              </button>
              <div className="collapse" id="booking-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><Link className="nav-link" to="/pages/bookings/list">Booking Data</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/pages/bookings/analytics">Booking Analytics</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="mdi mdi-grid-large menu-icon"></i>
                <span className="menu-title">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminHeader;
