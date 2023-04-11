import React from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <div>
      <Container>
        <div className='nav-bar'>
          <div>
            <h2 id='title'>Jobizz</h2>
          </div>

          <nav>
            <ActiveLink to="statistics">Statistics</ActiveLink>
            <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
            <ActiveLink to="/blog">Blogs</ActiveLink>
          </nav>

          <button className='btn-primary'><span id='apply-now'>Apply Now</span></button>
        </div>
      </Container>
    </div>
  );
};

export default Header;