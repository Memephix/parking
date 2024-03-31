import React from 'react';

const ProfileEdit = ({ username, setUsername, email, setEmail, onSave }) => (
  <div>
    <h1>Edit Profile</h1>
    <p>Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></p>
    <p>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
  </div>
);

export default ProfileEdit;


