import React from 'react';

const DashboardStats = () => {
    return (
        <div className="stats shadow">
            {/* Total Contacts */}
            <div className="stat">
                <div className="stat-figure text-primary">
                    {/* Replace with your preferred SVG icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <path d="M20 8v6m0 4v2-2m0 0h-2 2z"></path>
                    </svg>
                </div>
                <div className="stat-title">Total Contacts</div>
                <div className="stat-value text-primary">1.2K</div>
                <div className="stat-desc">15% more than last month</div>
            </div>

            {/* Recent Engagements */}
            <div className="stat">
                <div className="stat-figure text-secondary">
                    {/* Replace with your preferred SVG icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.5 4.5-4.5 4.5M4 4v7a4 4 0 004 4h12"></path>
                    </svg>
                </div>
                <div className="stat-title">Recent Engagements</div>
                <div className="stat-value text-secondary">320</div>
                <div className="stat-desc">18% more interactions</div>
            </div>

            {/* Tasks Completed */}
            <div className="stat">
                <div className="stat-figure text-secondary">
                    {/* Replace with your preferred SVG icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"></path>
                        <path d="M20 21v-2a4 4 0 00-3-3.87"></path>
                        <path d="M4 21v-2a4 4 0 013-3.87"></path>
                        <path d="M4 3a4 4 0 013-3.87"></path>
                        <path d="M20 3v2a4 4 0 01-3 3.87"></path>
                    </svg>
                </div>
                <div className="stat-title">Tasks Completed</div>
                <div className="stat-value">76%</div>
                <div className="stat-desc text-secondary">22 tasks remaining</div>
            </div>
        </div>
    );
}

export default DashboardStats;
