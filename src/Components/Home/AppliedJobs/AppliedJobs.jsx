import React, { useEffect, useState, useMemo } from 'react';
import './AppliedJobs.css'
import { Container } from 'react-bootstrap';
import { getShoppingCart } from '../../../Utilities/fakeDb';
import ShowAppliedJobDetails from '../ShowAppliedJobDetails/ShowAppliedJobDetails';
import img1 from '../../../../assets/All Images/Vector-1.png'
import img2 from '../../../../assets/All Images/Vector.png'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AppliedJobs = () => {

  const [featuredJobs, setFeaturedJobs] = useState();
  const storedAppliedJobs = getShoppingCart();

  useEffect(() => {
    const featuredJobLoader = async () => {
      const loadJobs = await fetch('/FeaturedJobs.json');
      const newFeaturedJobs = await loadJobs.json();
      setFeaturedJobs(newFeaturedJobs);
    }
    featuredJobLoader();
  }, []);

  const appliedJobs = useMemo(() => {
    if (featuredJobs) {
      const filteredJobs = featuredJobs.filter(job => storedAppliedJobs.hasOwnProperty(job.id));
      return filteredJobs;
    }
    return [];
  }, [featuredJobs, storedAppliedJobs]);

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Filter By">
        <Dropdown.Item href="#/action-1">Full Time</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Onsite</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Remote</Dropdown.Item>

      </DropdownButton>
      <h2 className='text-center appliedJobsBanner-title'>Applied Jobs</h2>
      <div className='appliedJobs-banner'>

        <div className='d-flex justify-content-between appliedJobs-img'>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>


      <Container>
        {
          appliedJobs.map(eachFinalJob => <ShowAppliedJobDetails eachFinalJob={eachFinalJob}></ShowAppliedJobDetails>)
        }
      </Container>
    </div>
  );
};

export default AppliedJobs;
