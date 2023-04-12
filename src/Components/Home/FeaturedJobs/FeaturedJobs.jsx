import React from 'react';
import './FeaturedJobs.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const FeaturedJobs = ({ eachFeaturedJob }) => {
  let { company_logo, company_name, employment_type, job_location, job_position, job_type, salary } = eachFeaturedJob;

  return (
    <div className='d-inline-flex p-2 m-2 mx-auto'>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={company_logo} />
        <Card.Body>
          <Card.Title>{company_name}</Card.Title>
          <Card.Text>
            {employment_type} {job_type} {salary}
          </Card.Text>
          <Button variant="primary">Show Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeaturedJobs;