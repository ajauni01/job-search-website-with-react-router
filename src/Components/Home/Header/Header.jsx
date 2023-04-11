import React from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import Container from 'react-bootstrap/Container';
import img from '../../../../assets/All Images/P3OLGJ1 copy 1.png'

const Header = () => {
  return (
    <div className='parent-container'>
      <Container>
        <div className='nav-bar'>
          <div>
            <h2 id='nav-title'>Jobizz</h2>
          </div>

          <nav>
            <ActiveLink to="statistics">Statistics</ActiveLink>
            <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
            <ActiveLink to="/blog">Blogs</ActiveLink>
          </nav>
          <button className='btn-primary'><span id='apply-now'>Apply Now</span></button>
        </div>
        {/* nav-bar-ends */}
        <div className='d-flex justify-content-between'>

          <div className='header-elements'>

            <div className='job-title'>
              <span><span className='fw-bold fs-1'>One Step</span> <span className='fw-bold fs-1'>Closer To Your</span>
              </span>

              <span className='fw-bold fs-1 job-title-part-2'> Dream Job</span>

            </div>

            <p className='job-subtitle'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>


            <button
              className='btn-primary'><span id='apply-now'>Get Started</span></button>
          </div>



          <div>
            <img src={img} alt="" />
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Header;