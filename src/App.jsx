import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Admin/Dashboard';
import ManageTasks from './pages/Admin/ManageTasks';
import ManageUsers from './pages/Admin/ManageUsers';

import UserDashboard from './pages/User/UserDashboard';
import ViewTaskDetails from './pages/User/ViewTaskDetails';
import MyTasks from './pages/User/MyTasks';

import PrivateRoute from './routes/PrivateRoute';
import UserProvider from './context/userContext';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';

const App = () =>{
  return (
    <UserProvider>
    <div >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} /> 

          {/*Admin Routes*/}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashbord" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            </Route>

          {/*User Routes*/}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />

            </Route>

          {/* HomePgae Route */}
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </Router>
    </div>

    <Toaster
      toastOptions={{
        className:"",
        style: {
          fontSize: "13px",
        },
      }}
      />
    </UserProvider>
  );
};

export default App;


