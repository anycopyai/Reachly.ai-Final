// In your page or parent component
import React, { useState } from 'react';
import PersonalizeOutreachModal from '../components/icebreakers/PersonalizeOutreachModal';

const YourComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <PersonalizeOutreachModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default YourComponent;
