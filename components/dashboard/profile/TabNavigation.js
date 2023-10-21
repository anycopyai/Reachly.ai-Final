export function TabNavigation({ activeTab, onTabClick }) {
    return (
        <div className="tabs tabs-boxed">
            {['Profile', 'Account', 'Security', 'Mailbox', 'Integration', 'API', 'Subscription'].map(tab => (
                <button key={tab} onClick={() => onTabClick(tab)} className={`tab ${activeTab === tab ? 'tab-active' : ''}`}>
                    {tab}
                </button>
            ))}
        </div>
    );
}
