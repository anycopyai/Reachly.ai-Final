import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import { useRouter } from 'next/router';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import AlertBadge from '../components/dashboard/AlertBadge'; // Import AlertBadge

function Projects() {
    const [trialDays, setTrialDays] = useState(7);  // State to hold trial days
    const projects = [
        {
            id: 1,
            name: 'Default Project',
            description: 'This is your default project.',
        },
        // Add more projects here as needed
    ];

    const router = useRouter();

    const navigateToProject = (projectId) => {
        router.push(`/projects/${projectId}`);
    };

    const createNewProject = () => {
        console.log('Creating a new project');
    };

    return (
        <div className="flex h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />
                
                {/* Add AlertBadge just below DaisyUIMenu */}
                <AlertBadge trialDays={trialDays} />

                <div className="flex-1 p-10">
                    {/* New Project Button */}
                    <div className="flex justify-start mb-5">
                        <button
                            onClick={createNewProject}
                            className="btn btn-primary"
                        >
                            New Project
                        </button>
                    </div>
                    
                    <h1 className="text-2xl font-bold mb-5 text-reachly-blue">Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map(project => (
                            <div
                                key={project.id}
                                className="border p-5 rounded-lg shadow-sm bg-white cursor-pointer hover:bg-indigo-100 transition-colors"
                                onClick={() => navigateToProject(project.id)}
                            >
                                <div>
                                    <h2 className="text-xl font-semibold">{project.name}</h2>
                                    <p className="mt-2 text-gray-600">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
