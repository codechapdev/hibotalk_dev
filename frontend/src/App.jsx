import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Admin_portal from './components/Admin_portal';

import PrivateRoute from './components/PrivateRoute';

import AdminHeader from './pages/Header';

import ConversionFunnel from './pages/user/ConversionFunnel'
import Matching_Success_Rate from './pages/user/Matching_Success_Rate';
import Resource_engagement_rate from './pages/user/Resource_engagement_rate';
import Session_completion_rate from './pages/user/Session_completion_rate';
import List from './pages/member/List';
import Addcustomer from './pages/member/Add_customer'
import Editcustomer from './pages/member/Edit_customer'
import View from './pages/member/View';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenteeList from './pages/mantee/MenteeList';
import EditMentee from './pages/mantee/Edit_mentee';
import MenteeData from './pages/mantee/View_mentee';
import ResourceList from './pages/resource/Resaurce_list';
import Edit_Resource from './pages/resource/Edit_Resource';
import View_Resource from './pages/resource/View_Resource';
import Add_resource from './pages/resource/Add_resouce';
import Analytics_resource from './pages/resource/Analytics_resource';
import List_community from './pages/community/List_community';
import Edit_community from './pages/community/Edit_community';
import View_Community from './pages/community/View_community';
import List_bookings from './pages/bookings/List_bookings';
import Edit_bookings from './pages/bookings/Edit_bookings';
import View_bookings from './pages/bookings/View_bookings';
import Analytics_bookings from './pages/bookings/Analytics_bookings';



function App() {
  console.log(window.location.pathname);
  return (
    <Router>
      <Routes>

         {/* Public route */}
        <Route path="/" element={<Login />} /> 

          {/* Private route */}
        <Route path="/admin" element={<PrivateRoute><Admin_portal /></PrivateRoute>} />
        <Route path="/pages/user/conversion-funnel" element={<PrivateRoute><ConversionFunnel /></PrivateRoute>} />
        <Route path="/pages/user/matching-success-rate" element={<PrivateRoute><Matching_Success_Rate /></PrivateRoute>} />
        <Route path="/pages/user/resource-engagement-rate" element={<PrivateRoute><Resource_engagement_rate /></PrivateRoute>} />
        <Route path="/pages/user/session-completion-rate" element={<PrivateRoute><Session_completion_rate /></PrivateRoute>} />
        <Route path='/pages/member/list' element={<PrivateRoute><List /></PrivateRoute>} />
        <Route path='/pages/member/add-customer' element={<PrivateRoute><Addcustomer /></PrivateRoute>} />
        <Route path='/pages/member/edit-customer' element={<PrivateRoute><Editcustomer /></PrivateRoute>} />
        <Route path='/pages/member/view-customer' element={<PrivateRoute><View /></PrivateRoute>} />
        <Route path="/pages/mantee/list" element={<PrivateRoute><MenteeList /></PrivateRoute>} />
        <Route path="/pages/mantee/edit-mantee" element={<PrivateRoute><EditMentee /></PrivateRoute>} />
        <Route path="/pages/mantee/view-mantee" element={<PrivateRoute><MenteeData /></PrivateRoute>} />
        <Route path="/pages/resource/list" element={<PrivateRoute><ResourceList /></PrivateRoute>} />
        <Route path="/pages/resource/edit-resource" element={<PrivateRoute><Edit_Resource /></PrivateRoute>} />
        <Route path="/pages/resource/view-resource" element={<PrivateRoute><View_Resource /></PrivateRoute>} />
        <Route path="/pages/resource/add-resource" element={<PrivateRoute><Add_resource /></PrivateRoute>} />
        <Route path="/pages/resource/analytics" element={<PrivateRoute><Analytics_resource /></PrivateRoute>} />
        <Route path="/pages/community/list" element={<PrivateRoute><List_community /></PrivateRoute>} />
        <Route path="/pages/community/edit-community" element={<PrivateRoute><Edit_community /></PrivateRoute>} />
        <Route path="/pages/community/view-community" element={<PrivateRoute><View_Community /></PrivateRoute>} />
        <Route path="/pages/bookings/list" element={<PrivateRoute><List_bookings /></PrivateRoute>} />
        <Route path="/pages/bookings/edit-bookings" element={<PrivateRoute><Edit_bookings /></PrivateRoute>} />
        <Route path="/pages/bookings/view-bookings" element={<PrivateRoute><View_bookings /></PrivateRoute>} />
        <Route path="/pages/bookings/analytics" element={<PrivateRoute><Analytics_bookings /></PrivateRoute>} />
        <Route path="/header" element={<PrivateRoute><AdminHeader /></PrivateRoute>} />

      </Routes>
    </Router>
  );
}

export default App;