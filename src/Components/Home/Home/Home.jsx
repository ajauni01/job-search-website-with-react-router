import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Home;