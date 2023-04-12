import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Body from '../Body/Body';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>



    </div>
  );
};

export default Home;