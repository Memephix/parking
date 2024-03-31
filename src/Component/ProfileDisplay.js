import React from 'react';

const ProfileDisplay = ({ username, email }) => (
  <div>
    <h1>Profile</h1>
    <img src="url_of_your_Image" alt="Profile Image" />
    <p>Username: {username}</p>
    <p>Email: {email}</p>
  </div>
);

export default ProfileDisplay;

