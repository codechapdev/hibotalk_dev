import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Import core libraries
import 'jquery';
import 'chart.js';
import 'bootstrap-datepicker';

// ✅ Import CSS properly
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Global styles here
import './assets/vendors/feather/feather.css';
import './assets/vendors/mdi/css/materialdesignicons.min.css';
import './assets/vendors/ti-icons/css/themify-icons.css';
import './assets/vendors/font-awesome/css/font-awesome.min.css';
import './assets/vendors/typicons/typicons.css';
import './assets/vendors/simple-line-icons/css/simple-line-icons.css';
import './assets/vendors/css/vendor.bundle.base.css';
import './assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css';
import './assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css';
import './assets/css/style.css';
import './assets/js/select.dataTables.min.css';


// ✅ Import JS libraries that are installed via npm
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js

// ✅ Dynamically load only *necessary custom JS files* (not CSS!)
const loadScript = (src) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
  return () => document.body.removeChild(script);
};

// ✅ List of custom JS-only files (no CSS files here)
const vendorScripts = [
  '/assets/vendors/js/vendor.bundle.base.js',
  '/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js',
  '/assets/vendors/chart.js/chart.umd.js',
  '/assets/vendors/progressbar.js/progressbar.min.js',
  '/assets/js/off-canvas.js',
  '/assets/js/template.js',
  '/assets/js/settings.js',
  '/assets/js/hoverable-collapse.js',
  '/assets/js/todolist.js',
  '/assets/js/jquery.cookie.js',
  '/assets/js/dashboard.js',
];

// ✅ Load all vendor scripts
vendorScripts.forEach(loadScript);

// ✅ Render React app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
  </React.StrictMode>
);
