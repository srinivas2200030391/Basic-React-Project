// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ViewJobSeekers() {
//   const [jobseekers, setJobSeekers] = useState([]);

//   const fetchjobseekers = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:2014/admin/viewjobseekers"
//       );
//       setJobSeekers(response.data);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchjobseekers();
//   }, []);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Job Seekers</h1>
//       <table
//         border={1}
//         align="center"
//         width="95%"
//         height="30%"
//         className="table">
//         <thead>
//           <tr>
//             <th>Full Name</th>
//             <th>Gender</th>
//             <th>Date of Birth</th>
//             <th>Email</th>
//             <th>Location</th>
//             <th>Contact</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jobseekers.map((jobseeker, index) => (
//             <tr key={index}>
//               <td>{jobseeker.fullname}</td>
//               <td>{jobseeker.gender}</td>
//               <td>{jobseeker.dateofbirth}</td>
//               <td>{jobseeker.email}</td>
//               <td>{jobseeker.location}</td>
//               <td>{jobseeker.contact}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewJobSeekers;

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ViewJobSeekers() {
  const [jobseekers, setJobSeekers] = useState([]);

  const fetchJobSeekers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2014/admin/viewjobseekers"
      );
      setJobSeekers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchJobSeekers();
  }, []);

  const deleteJobSeeker = async (email) => {
    try {
      await axios.delete(
        `http://localhost:2014/admin/deletejobseeker/${email}`
      );
      fetchJobSeekers();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Job Seekers</h1>

      <table
        border={1}
        align="center"
        style={{ width: "auto", height: "auto" }}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(jobseekers) && jobseekers.length > 0 ? (
            jobseekers.map((jobseeker, index) => (
              <tr key={index}>
                <td>{jobseeker.fullname}</td>
                <td>{jobseeker.gender}</td>
                <td>{jobseeker.dateofbirth}</td>
                <td>{jobseeker.email}</td>
                <td>{jobseeker.location}</td>
                <td>{jobseeker.contact}</td>
                <td>
                  <button
                    onClick={() => deleteJobSeeker(jobseeker.email)}
                    className="button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
