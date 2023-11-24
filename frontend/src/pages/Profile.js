// // ProfilePage.js

// import React from 'react';
// import './Profile.css'; // Import your CSS file for styling

// const Profile = () => {
//   // Sample data
//   const profile = {
//     name: 'John Doe',
//     education: 'Bachelor of Science in Computer Science',
//     location: 'New York, USA',
//     profilePhoto: 'url_to_your_image.jpg',
//     hobbies: ['Reading', 'Traveling', 'Coding'],
//     qualifications: ['React Developer', 'JavaScript Expert', 'UI/UX Enthusiast'],
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <img src={profileData.profilePhoto} alt="Profile" className="profile-photo" />
//         <h1>{profileData.name}</h1>
//         <p>{profileData.education}</p>
//         <p>{profileData.location}</p>
//       </div>

//       <div className="profile-section">
//         <h2>Hobbies</h2>
//         <ul>
//           {profileData.hobbies.map((hobby, index) => (
//             <li key={index}>{hobby}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="profile-section">
//         <h2>Qualifications</h2>
//         <ul>
//           {profileData.qualifications.map((qualification, index) => (
//             <li key={index}>{qualification}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// ProfilePage.js

import React from 'react';
import './Profile.css';

const Profile = () => {
  const name = 'Hello world';
  const education = 'Bachelor of Science in Computer Science';
  const location = 'New York, USA';
  const profilePhoto = 'url_to_your_image.jpg';
  const hobbies = ['Reading', 'Traveling', 'Coding'];
  const qualifications = ['React Developer', 'JavaScript Expert', 'UI/UX Enthusiast'];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <h1>{name}</h1>
        <p>{education}</p>
        <p>{location}</p>
      </div>

      <div className="profile-section">
        <h2>Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      <div className="profile-section">
        <h2>Qualifications</h2>
        <ul>
          {qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
