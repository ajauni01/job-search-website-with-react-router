import React, { useEffect, useState } from 'react';
import './ShowDetails.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../../../assets/All Images/Vector-1.png'
import img2 from '../../../../assets/All Images/Vector.png'
import { addToDb, getShoppingCart } from '../../../Utilities/fakeDb';
import toast from 'react-hot-toast';



const ShowDetails = () => {
  let { id } = useParams();
  let [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    let featuredJobLoader = async () => {
      let loadJobs = await fetch('/FeaturedJobs.json');
      let newFeaturedJobs = await loadJobs.json();
      // update the useState with the fetched featuredJobs
      setFeaturedJobs(newFeaturedJobs);
    }
    featuredJobLoader();
  }, [])

  // console.log("All Jobs", featuredJobs);
  console.log('Dynamically Passed Id', id);

  // use the find method to specify the selected job
  let specifiedJob = featuredJobs.find(singleJobDetails => singleJobDetails.id === parseInt(id));
  console.log('selected job details', specifiedJob);

  // function to handle apply now, and store data in the local storage
  let handleApplyNow = id => {
    console.log('Button clicked', id);
    // store the id of the applied job to the local storage
    let storeId = addToDb(id);
    // check whether the user already applied for this job
    let isAlreadyApplied = getShoppingCart();
    // show relevant toast to the applicant
    for (const ID in isAlreadyApplied) {
      let appliedJob = featuredJobs.find(singleJobDetails => singleJobDetails.id === parseInt(ID));
      console.log('appliedJob', appliedJob);
      // set the toasts
      // if (appliedJob) {
      //   toast.error('You have already applied to this job')
      // }
      // else {
      //   toast.success('successfully applied')
      // }
    }
  }



  return (
    <div>

      <div className='banner-container'>
        <p className='fs-1 fw-bold banner-title'>Job Details</p>
        <div className='d-flex justify-content-between img-container'>

          <img src={img1} alt="" />
          <img className='img-2' src={img2} alt="" />
        </div>

      </div>

      <Container>

        {specifiedJob ? (

          <div className='d-flex justify-content-around'>
            <div className='job-specifications'>
              <p><span className='fs-5 fw-bold'>Job Description:</span> <span style={{ color: 'gray', fontSize: '18px' }}>{specifiedJob.job_responsibility}</span></p>

              <p><span className='fs-5 fw-bold'>Educational Requirements: </span><span style={{ color: 'gray', fontSize: '18px' }}>{specifiedJob.educational_requirements}</span></p>

              <p><span className='fs-5 fw-bold'>Experiences:</span> <span style={{ color: 'gray', fontSize: '18px' }}>{specifiedJob.experiences}</span></p>
            </div>

            <div className='applyNow-card'>
              <Card className='card-primary'>
                <Card.Body>
                  <p className='fs-4 fw-bold'>Job Details</p>
                  <hr></hr>
                  <p><span className='fs-5 fw-bold'>Salary:</span> ${specifiedJob.salary} per month</p>

                  <p className='fs-5 fw-bold'>Job Title: {specifiedJob.job_position}</p>
                  <hr></hr>
                  <p className='fs-4 fw-bold'>Contact Information</p>
                  <hr></hr>
                  <p><span className='fs-5 fw-bold'>Phone:</span> {specifiedJob.contact_information.phone}</p>
                  <p><span className='fs-5 fw-bold'>Email:</span> {specifiedJob.contact_information.email} </p>

                  <Button onClick={() => handleApplyNow(id)} variant="primary">Apply Now</Button>
                </Card.Body>
              </Card>
            </div>
          </div>

        ) : (<p>Please try again!</p>)

        }

      </Container>



    </div >
  );
};

export default ShowDetails;
