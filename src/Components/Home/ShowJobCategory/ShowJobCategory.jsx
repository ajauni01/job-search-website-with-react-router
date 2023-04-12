import React from 'react';
import './ShowJobCategory.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const ShowJobCategory = ({ jobCategory }) => {
  let { logo, title, available_jobs } = jobCategory;

  return (

    <div className='d-inline-flex p-2 mb-5'>
      <Card className='card-properties'>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title><h2>{title}</h2>
          </Card.Title>
          <Card.Text>
            {available_jobs}
          </Card.Text>
          <Button variant="primary">Apply Now</Button>
        </Card.Body>
      </Card>

    </div>
  );
};

export default ShowJobCategory;