import { useState } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/sidebar';
import { FaCopy, FaSave } from 'react-icons/fa'; // Import the icons you want to use from react-icons


const InterviewQuestion = () => {
  const [generatedQuestions, setGeneratedQuestions] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [credits, setCredits] = useState(100); // Add this line for managing credits
  const [activeTab, setActiveTab] = useState('prompt');


  const showPrompt = () => {
    document.querySelectorAll('.tab-content').forEach(el => el.setAttribute('data-active', 'prompt'));
  };
  
  const showResults = () => {
    document.querySelectorAll('.tab-content').forEach(el => el.setAttribute('data-active', 'results'));
  };
  
  
  const testList = () => {
    const testHtml = "<ol><li>Question 1</li><li>Question 2</li><li>Question 3</li></ol>";
    setGeneratedQuestions(testHtml);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setGeneratedQuestions('');
    setError(null);
    setIsLoading(true); // Start loading
  
    const formData = {
      role: event.target.role.value,
      experience: event.target.experience.value,
    };
  
    try {
      // Send POST request to Flask endpoint
      const response = await fetch('https://api.elixcent.com/generate_interview_questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setGeneratedQuestions(data.questions); // Directly set the formatted questions
      } else {
        setError('Failed to generate questions');
      }
    } catch (err) {
      setError('Error connecting to the server');
    }
    setIsLoading(false); // Stop loading
  };
  
  return (
    <>
      <Head>
        <title>Recruitment Interview Questions</title>
        <meta name="description" content="Recruitment form for fullstack developer position" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <div className="flex flex-row h-screen bg-gray-50 overflow-hidden">
        <Sidebar />
  
        {/* Main content area */}
        <div className="flex flex-col w-full ml-20">
          {/* Navigation Bar */}
  {/* New Navigation Bar */}
  <div className="flex items-center justify-between w-full px-10 py-5 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-semibold text-gray-800">Landing Page Copy</h1>
          <button type="button" className="text-yellow-400 hover:text-yellow-500">
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6">
              <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-200 rounded-full"></div>
            <div className="relative bg-gray-200 rounded-full py-1 px-4">
              <span className="text-sm text-blue-800">146 Credits Left</span>
            </div>
          </div>
          <button className="px-8 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Write For Me
          </button>
        </div>
      </div>  
          {/* Tab Navigation and Content */}
          <div className="flex flex-col md:flex-row w-full">
            {/* Prompt Section */}
            <div className="tab-content w-full md:w-1/2 p-4 border-r border-gray-200">
              <button onClick={showPrompt} className="text-sm font-medium pb-2 px-1 border-b-2 md:hidden">
                Prompt
              </button>
              <div id="promptContent">
                {/* Content for Prompt section */}
                <p>Prompt screen content</p>
                <h2 className="text-2xl font-light text-gray-600">Recruitment Interview Questions</h2>
  <form className="space-y-4" onSubmit={handleSubmit}>
    {/* Role Field */}
    <div>
      <label htmlFor="role" className="text-sm font-semibold text-gray-700">Role</label>
      <input id="role" name="role" type="text" required className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., Fullstack Developer" />
    </div>

    {/* Experience Field */}
    <div>
      <label htmlFor="experience" className="text-sm font-semibold text-gray-700">Experience</label>
      <input id="experience" name="experience" type="text" required className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., React, Laravel, AWS" />
    </div>

    {/* Submit Button */}
    <div>
      <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in duration-200" disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Write For Me'}
      </button>
    </div>
  </form>              </div>
            </div>
  
            {/* Results Section */}
            <div className="tab-content w-full md:w-1/2 p-4">
              <button onClick={showResults} className="text-sm font-medium pb-2 px-1 border-b-2 md:hidden">
                Results
              </button>
              <div id="resultsContent">
                {/* Content for Results section */}
                <div dangerouslySetInnerHTML={{ __html: generatedQuestions }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
  
};

export default InterviewQuestion;