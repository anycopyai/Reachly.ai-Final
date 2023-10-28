import { useEffect } from 'react';

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch("https://w9rx4mu3pa.execute-api.ap-south-1.amazonaws.com/api/hello");
      const data = await response.text();  // or response.json() if your API returns JSON
      console.log("Data from Flask API:", data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}
