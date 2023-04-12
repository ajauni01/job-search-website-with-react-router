import React, { useEffect, useState } from 'react';
import './Default.css'
import Container from 'react-bootstrap/Container';
import img from '../../../../assets/All Images/P3OLGJ1 copy 1.png'
import ShowJobCategory from '../ShowJobCategory/ShowJobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Default = () => {
  // useState and useEffect for the job category section
  let [jobCategory, setJobCategory] = useState([]);
  useEffect(() => {
    let loadAllJobCategories = async () => {
      let loadCategories = await fetch('JobCategory.json');
      let loadedCategoryData = await loadCategories.json();
      setJobCategory(loadedCategoryData);
    }
    loadAllJobCategories();
  }, [])

  // useState, and useEffect for the featured jobs section
  let [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    let featuredJobLoader = async () => {
      let loadJobs = await fetch('FeaturedJobs.json');
      let featuredJobs = await loadJobs.json();

      // update the useState with the fetched featuredJobs
      setFeaturedJobs(featuredJobs);
    }
    featuredJobLoader();
  }, [])
  // slice the featuredJobs until 4
  if (featuredJobs && featuredJobs.length >= 4) {
    featuredJobs = featuredJobs.slice(0, 4);
  }


  return (
    <div className='default-parent-container'>
      <Container className='container-properties'>
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
        {/* job-category-div-ends */}

        {/* featured-job-starts */}
        <div>
          <div className='text-center'>
            <h1 className='fs-1'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>

          <div className='text-center'>
            {
              featuredJobs.map(eachFeaturedJob => <FeaturedJobs eachFeaturedJob={eachFeaturedJob} key={eachFeaturedJob.id} ></FeaturedJobs>)
            }
          </div>
          <button onClick={() => seeAll(true)} className='see-all'>See all</button>

        </div>
        {/* featured-job-ends */}




      </Container>
    </div>
  );
};

export default Default;