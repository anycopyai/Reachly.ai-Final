import { useState } from "react";

export default function Scrap() {
  const [url, setUrl] = useState("");
  const [gptOutputs, setGptOutputs] = useState([]);
  const [typedOutput, setTypedOutput] = useState("");
  const [prospectName, setProspectName] = useState("");
  const [senderCompanyName, setSenderCompanyName] = useState("");
  const [emailTemplate, setEmailTemplate] = useState("Template 1");

  const handleScraping = async () => {
    try {
      const res = await fetch("https://api.elixcent.com/scrap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          prospectName,
          senderCompanyName,
          emailTemplate,
        }),
      });

      const data = await res.json();
      setGptOutputs(data.gpt_outputs);
      setTypedOutput(data.gpt_outputs.join(" "));
    } catch (error) {
      console.error("There was an error with scraping: ", error);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen font-serif">
      <h1 className="text-4xl mb-4 font-bold text-gray-800">
        Personalized Email Generator
      </h1>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3 mb-4">
          <input
            type="text"
            className="w-full p-2 rounded outline-none shadow-md"
            placeholder="Enter URL to Analyze"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-4">
          <input
            type="text"
            className="w-full p-2 rounded outline-none shadow-md"
            placeholder="Prospect Name"
            value={prospectName}
            onChange={(e) => setProspectName(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-4">
          <input
            type="text"
            className="w-full p-2 rounded outline-none shadow-md"
            placeholder="Sender Company Name"
            value={senderCompanyName}
            onChange={(e) => setSenderCompanyName(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-4">
          <select
            className="w-full p-2 rounded shadow-md"
            value={emailTemplate}
            onChange={(e) => setEmailTemplate(e.target.value)}
          >
            <option>Template 1</option>
            <option>Template 2</option>
            <option>Template 3</option>
          </select>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
        onClick={handleScraping}
      >
        Generate Email
      </button>
      {typedOutput && (
        <div className="mt-8">
          <h2 className="text-3xl mb-4 font-bold text-gray-800">
            Generated Email
          </h2>
          <div className="border p-4 rounded shadow-md">
            <p>{typedOutput}</p>
          </div>
        </div>
      )}
    </div>
  );
}
