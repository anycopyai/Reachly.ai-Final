// pages/create.js
import React from 'react';
import Sidebar from '../components/Writer/Sidebar'; // Adjust the import path as needed
import CreateProject from '../components/writer/CreateProject';

const CreateProjectPage = () => {
  const handleProjectCreate = (newProject) => {
    // Logic to save the new project to your database or state
    console.log(newProject);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Create a New Project</h1>
          <CreateProject onProjectCreate={handleProjectCreate} />
        </div>
      </main>
    </div>
  );
};

export default CreateProjectPage;
