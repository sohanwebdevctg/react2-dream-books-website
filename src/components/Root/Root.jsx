// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Root.css';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LoadingPage from '../LoadingPage/LoadingPage';
import Navbar from '../Navbar/Navbar';


const Root = () => {

  const navigation = useNavigation();

  return (
    <div>
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      <div className='bg-black'>
        {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;