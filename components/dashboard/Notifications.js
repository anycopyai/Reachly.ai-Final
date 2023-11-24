import React from 'react';

const Notifications = ({ isOpen }) => {
  return (
    <div className={`drawer ${isOpen ? 'drawer-open' : 'drawer-end'}`}>
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />
      <div className="drawer-content">
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
