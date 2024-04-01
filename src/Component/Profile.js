import React, { useState } from 'react';
import ProfileDisplay from './ProfileDisplay';
import ProfileEdit from './ProfileEdit';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [edit, setEdit] = useState(false);
  const [deleteAction, setDeleteAction] = useState(false);

  const handleSave = () => {
    if (edit) {
      setEdit(false); 
      alert('Save Successful');
    } else {
      setEdit(true);
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this profile?');
    if (confirmDelete) {
      setDeleteAction(true);
      setUsername('');
      setEmail('');
      setEdit(false); 
      alert('Delete Successful');
    }
  };

  return (
    <div>
      {edit ? (
        <ProfileEdit
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          onSave={handleSave}
        />
      ) : (
        <ProfileDisplay username={username} email={email} />
      )}
      <button onClick={handleSave}>{edit ? 'save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
      {deleteAction && <p>Delete Successful</p>}
    </div>
  );
};

export default Profile;



