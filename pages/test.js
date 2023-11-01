import { useState } from 'react';

export default function Scrap() {
  const [url, setUrl] = useState('');
  const [scrapedData, setScrapedData] = useState(null);

  const handleScraping = async () => {
    const res = await fetch('https://api.elixcent.com/scrap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    setScrapedData(data.content);
  };

  return (
    <div>
      <h1>Website Scraper</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleScraping}>Scrap</button>
      {scrapedData && (
        <div>
          <h2>Scraped Data</h2>
          <p>{scrapedData}</p>
        </div>
      )}
    </div>
  );
}
