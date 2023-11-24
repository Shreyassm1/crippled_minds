// import React from 'react'

// const Jobs = () => {
//   return (
//     <div>This is your Job section !!</div>
//   )
// }

// export default Jobs;

// Jobs.js

import React from 'react';
import './Jobs.css';

const Jobs = ({ job }) => {
  return (
    <div className="job-profile">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      {/* Add more job details as needed */}
    </div>
  );
};

export default Jobs;
