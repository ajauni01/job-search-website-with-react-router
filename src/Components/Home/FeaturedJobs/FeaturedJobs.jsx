import React from 'react';
import './FeaturedJobs.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';


const FeaturedJobs = ({ eachFeaturedJob }) => {
  let { id, company_logo, company_name, employment_type, job_location, job_position, job_type, salary } = eachFeaturedJob;
  console.log('clicked id', id);


  // let navigate = useNavigate();
  // let handleNavigate = (id) => {
  //   console.log('Feature Page', id)
  //   navigate(`/showDetails/${id}`)
  // }


  return (
    <div className='d-inline-flex p-2 m-2 mx-auto'>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={company_logo} />
        <Card.Body>
          <h1>{company_name}</h1>
          <Card.Text>
            <h2 className='fw-bold'>{job_position}</h2>
            <h5>{job_location}</h5>
            {employment_type}, {job_type}, ${salary}
          </Card.Text>


          <Link to={`/jobDetails/${id}`}> <Button
            variant="primary">
            Show Details
          </Button></Link>

        </Card.Body>
      </Card>
    </div>
  );
};

export default FeaturedJobs;