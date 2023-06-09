import React from 'react';
import './FeaturedJobs.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';


const FeaturedJobs = ({ eachFeaturedJob }) => {
  let { id, company_logo, company_name, employment_type, job_location, job_position, job_type, salary } = eachFeaturedJob;

  return (
    <div className='d-inline-flex p-2 m-2 mx-auto'>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={company_logo} />
        <Card.Body>
          <h1>{company_name}</h1>
          <Card.Text>
            <h2 className='fw-bold'>{job_position}</h2>
            <div>
              <button className='btn btn-primary'>{job_type}</button>   <button className='btn btn-primary'> {employment_type}</button>
            </div>
            {job_location},  ${salary}
          </Card.Text>


          <Link to={`/jobDetails/${id}`}>
            <button className='btn btn-secondary'>Show Details</button>
          </Link>


        </Card.Body>
      </Card>
    </div>
  );
};

export default FeaturedJobs;