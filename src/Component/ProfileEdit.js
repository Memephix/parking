import React from 'react';

const ProfileEdit = ({ username, setUsername, email, setEmail, onSave }) => (
  <div>
    <h1 className="text-center">Edit Profile</h1>
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="button" className="btn btn-primary" onClick={onSave}>Save</button>
    </form>
  </div>
);

export default ProfileEdit;