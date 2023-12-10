import React from 'react';
import PersonalInfo from './PersonalInfo';
import SubscriptionInfo from './SubscriptionInfo';
import ProjectInfo from './ProjectInfo';

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'personal':
      return <PersonalInfo />;
    case 'subscription':
      return <SubscriptionInfo />;
    case 'projects':
      return <ProjectInfo />;
    default:
      return <div>Select a tab</div>;
  }
};

export default TabContent;
