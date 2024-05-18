import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import Header from './component/layout/Header/Header';
import Home from "./component/Home/Home";
import SignUp from './components/Signup';
import Admindashboard from './components/DashBoard/Admindashboard';
import { Empdashboard } from './components/Empdashboard/Empdashboard';
import { Notfound } from './components/Notfound';
import Vapt from './component/Other/Vapt';
import Inhouse from './component/Other/Inhouse';
import CyberSecurity from './component/Other/CyberSecurity';
import Other from './component/Other/Other';
import Fullstack from './component/fullstack/Fullstack';
import Datascience from './component/datascience/Datascience';
import Humanresource from './component/Human resourcs/Humanresource';
import Udemy from './component/Udemy/Udemy';
import Footer from './component/layout/Footer/Footer'
import TC from './component/Other/TC'
import Book from './component/layout/bookmeeting';



function App() {


 
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className='p-0 m-0'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignUp />} />
            <Route path="/vapt" element={<Vapt />} />
            <Route path="/In-house" element={<Inhouse />} />
            < Route path="/udemy" element={<Udemy />} />
            < Route path="/dashboard/admin" element={<Admindashboard />} />
            <Route path="/dashboard/user" element={<Empdashboard />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/other" element={<Other />} />
            <Route path="/course/cybersecurity" element={<CyberSecurity />} />
            <Route path="/course/fullstack" element={<Fullstack />} />
            <Route path="/course/datascience" element={<Datascience />} />
            <Route path="/course/humanresource" element={<Humanresource />} />
            <Route path='/tc' element={<TC />} />
            <Route path='/book' element={<Book />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}



export default App;
