import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import ChangePassword from './components/Auth/ChangePassword';
import AdminDashboard from './components/Admin/AdminDashboard';
import Welcome from './components/UserDashboard/UserDashboard';
import CreateBranch from './components/Branch/CreateBranch';
import EditBranch from './components/Branch/EditBranch';
import ActiveLog from './components/Log/ActiveLog';
import Leads from './components/Leads/Leads';
import BookProduct from './components/UserDashboard/Availability/Booking';
import Customize from './components/Customize/Customize';
import CreateSuperAdmin from './components/Profile/CreateSuperAdmin';
import Profile from './components/Profile/Profile';
import Layout from './components/Profile/Layout';
import Lead from './components/./Leads/Addlead';
import EditLead from './components/Leads/EditLead';
import { UserProvider } from './components/Auth/UserContext';
import DetailsShared from './components/Leads/Leads';
import DemoScheduled from './components/Leads/Leads';
import Active from './components/Admin/AdminDashboard';
import DemoDone from './components/Leads/Leads';
import LeadWon from './components/Leads/Leads';
import LeadLost from './components/Leads/Leads';
import User from './components/UserDashboard/User';
import FreshLeads from './components/Leads/Leads';
import AddUser from './components/UserDashboard/Adduser';
import AddProduct from './components/Product/AddProduct';
import ProductDashboard from './components/Product/Product';
import CheckAvailability from './components/UserDashboard/Availability/Availability';
import Booking from './components/UserDashboard/Availability/Booking';
import EditUser from './components/UserDashboard/EditUser';
import ClientLeads from './components/UserDashboard/clientsLeads/ClientLeads'
import CallLeads from './components/UserDashboard/clientsLeads/CallLeads';
import RequirementShared from './components/UserDashboard/clientsLeads/RequirementShared'; // Import RequirementShared component
import CallEdit from './components/UserDashboard/clientsLeads/CallEdit';
import Interested from './components/UserDashboard/clientsLeads/Interested'; // Adjust path as needed
import NonInterested from './components/UserDashboard/clientsLeads/NonInterested'; 

const App = () => (
  <UserProvider>
  <Router>
    <Routes>
      {/* Uncomment and use if you have a Landing component */}
      {/* <Route path="/" element={<Landing />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/branches" element={<AdminDashboard />} />
      <Route path="/branches/active" element={<AdminDashboard />} />
      <Route path="/branches/deactive" element={<AdminDashboard />} />
      <Route path="/branches/expiring-soon" element={<AdminDashboard />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/create-branch" element={<CreateBranch />} />
      <Route path="/edit-branch/:id" element={<EditBranch />} />
      
      <Route path="/customize" element={<Customize />} />
      <Route path="/active-log" element={<ActiveLog />} />
      <Route path="/create-lead" element={<Lead />} />
      <Route path="/edit-lead/:id" element={<EditLead />} />
      <Route path="/leads/detail-shared" element={<DetailsShared />} />
      <Route path="/leads/fresh-leads" element={<FreshLeads/>}/>
      <Route path="/leads/demo-scheduled" element={<DemoScheduled />} />
      <Route path="/leads/demo-done" element={<DemoDone />} />
      <Route path="/leads/lead-won" element={<LeadWon />} />
      <Route path="/leads/lead-lost" element={<LeadLost/>} />
      <Route path="/usersidebar/users" element={<User />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/productdashboard" element={<ProductDashboard />} />
      <Route path="/usersidebar/availability" element={<Booking />} />
      <Route path="/edituser/:id" element={<EditUser />} />
      <Route path="/ClientLeads" element={<ClientLeads />} />
      <Route path="/call-leads" element={<CallLeads />} />
      <Route path="/requirementShared" element={<RequirementShared />} />
      <Route path="/calledit/:id" element={<CallEdit />} />
      <Route path="/interested" element={<Interested />} />
      <Route path="/noninterested" element={<NonInterested />} />

      

      <Route path="/" element={<Layout />}>
      <Route path="superadmin" element={<CreateSuperAdmin />} /> {/* Route for the LeadForm */}
      <Route path="profile" element={<Profile />} />
      
    </Route>
    </Routes>
  </Router>
  </UserProvider>
);

export default App;
