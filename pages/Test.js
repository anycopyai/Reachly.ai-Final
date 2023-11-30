
import { useState } from 'react';
import DataScrapeComponent from '../components/icebreakers/DataScrapeComponent'; // Adjust the path based on your file structure
import SortableComponent from '../components/icebreakers/SortableComponent'; // Ensure this path is correct

const YourParentComponent = () => {
  const [showSortableComponent, setShowSortableComponent] = useState(false);

  const handleContinue = () => {
    setShowSortableComponent(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header>
        {/* Your header content */}
      </header>
      <main>
        {/* Other content */}
        {!showSortableComponent && <DataScrapeComponent onContinue={handleContinue} />}
        {showSortableComponent && <SortableComponent />}
        {/* More content */}
      </main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default YourParentComponent;

