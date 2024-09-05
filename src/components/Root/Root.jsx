// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Root.css';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from '../Footer/Footer';
import LoadingPage from '../LoadingPage/LoadingPage';


const Root = () => {

  const navigation = useNavigation();

  return (
    <div>
      <Header></Header>
      <div className='bg-black'>
        {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;