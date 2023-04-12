import React, { useEffect, useState } from 'react';
import './Default.css'
import Container from 'react-bootstrap/Container';
import img from '../../../../assets/All Images/P3OLGJ1 copy 1.png'
import ShowJobCategory from '../ShowJobCategory/ShowJobCategory';

const Default = () => {
  let [jobCategory, setJobCategory] = useState([]);


  useEffect(() => {
    let loadAllJobCategories = async () => {
      let loadCategories = await fetch('JobCategory.json');
      let loadedCategoryData = await loadCategories.json();
      setJobCategory(loadedCategoryData);
    }
    loadAllJobCategories();
  }, [])


  return (
    <div className='default-parent-container'>
      <Container>
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


        {/* body */}
        <div className='text-center'>
          <h1>Job Category List</h1>
          <p className='job-category-description'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
        </div>

        <div>
          {
            jobCategory.map(eachJobCategory => <ShowJobCategory jobCategory={eachJobCategory} key={eachJobCategory.id}></ShowJobCategory>)
          }
        </div>



      </Container>

    </div>
  );
};

export default Default;