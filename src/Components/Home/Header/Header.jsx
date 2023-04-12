import React from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='parent-container'>

      <Container>
        <div className='nav-bar'>
          <div>
            <Link to="/"><h2 id='nav-title'>Jobizz</h2></Link>
          </div>

          <nav>
            <ActiveLink to="statistics">Statistics</ActiveLink>
            <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
            <ActiveLink to="/blog">Blogs</ActiveLink>
          </nav>
          <button className='btn-primary'><span id='apply-now'>Apply Now</span></button>
        </div>
        {/* nav-bar-ends */}
      </Container>
    </div>
  );
};

export default Header;