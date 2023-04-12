import React, { useEffect, useState } from 'react';
import './ShowDetails.css';
import { useLoaderData, useParams } from 'react-router-dom';

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
  console.log("All Jobs", featuredJobs);
  console.log('Dynamically Passed Id', id);

  return (
    <div>
      <h2>Show Details Page</h2>


    </div>
  );
};

export default ShowDetails;
