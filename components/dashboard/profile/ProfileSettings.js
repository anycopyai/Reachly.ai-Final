import React, { useState } from 'react';

const ProfileSettings = () => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-12 w-full h-auto overflow-y-auto">
      {/* Your settings content here */}
      <button 
        type="button" 
        className={`btn btn-${editing ? 'primary' : 'secondary'}`}
        onClick={editing ? handleSave : handleEdit}
      >
        {editing ? 'Save' : 'Update'}
      </button>
    </div>
  );
};

export default ProfileSettings;
