import React from 'react';
import './ShowAppliedJobDetails.css'
import { Link } from 'react-router-dom';

const ShowAppliedJobDetails = ({ eachFinalJob }) => {
  console.log('Each Final Job', eachFinalJob);
  let { id, company_logo, job_position, company_name, job_type, employment_type, job_location, salary, job_responsibility, educational_requirements, experiences, contact_information } = eachFinalJob;



  return (
    <div className='all-container'>

      <div className='parent-div'>

        <div className='d-flex job-description'>
          <div>
            <img className='logo' src={company_logo} alt="" />
          </div>
          <div>
            <p className='fs-2'>{job_position}</p>
            <p>{company_name}</p>
            <p>{job_type}, {employment_type} </p>
            <p>{job_location}, ${salary}</p>
          </div>
        </div>


        <div>
          <Link to={`/jobDetails/${id}`}>
            <button className='btn btn-secondary btn-details'>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowAppliedJobDetails;