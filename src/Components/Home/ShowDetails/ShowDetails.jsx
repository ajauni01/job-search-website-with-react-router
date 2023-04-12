import React from 'react';
import './ShowDetails.css';
import { useLoaderData } from 'react-router-dom';

const ShowDetails = () => {
  let data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2>Show Details Page</h2>

      {/* <h2>Show Details Page</h2>
      <h3>{job.company_name}</h3>
      <p>{job.job_position}</p> */}
      {/* display other job details */}
    </div>
  );
};

export default ShowDetails;
