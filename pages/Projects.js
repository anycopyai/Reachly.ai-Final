import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import AlertBadge from '../components/dashboard/AlertBadge'; 
import CreateProjectPopup from '../components/dashboard/CreateProjectPopup';
import { useRouter } from 'next/router';

function Projects() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Default Project',
            description: 'This is your default project.'
        },
    ]);
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();

    // Function to format project name to be URL friendly
    const formatProjectNameForUrl = (projectName) => {
        return projectName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    };

    const navigateToProject = (projectName) => {
        const formattedName = formatProjectNameForUrl(projectName);
        router.push(`/Projects/${formattedName}`);
    };

    const handleProjectCreated = async (projectName) => {
        try {
            const response = await fetch('https://api2.elixcent.com/create-project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ projectName })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const newProject = {
                id: data.projectId, // Assuming your API returns the project ID
                name: projectName,
                description: 'New project created.'
            };

            setProjects([...projects, newProject]);
            navigateToProject(newProject.name); // Navigate using project name
            setShowPopup(false);
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <div className="flex h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />
                <AlertBadge trialDays={7} />

                <div className="flex-1 p-10">
                    <div className="flex justify-start mb-5">
                        <button
                            onClick={() => setShowPopup(true)}
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
                                onClick={() => navigateToProject(project.name)}
                            >
                                <h2 className="text-xl font-semibold">{project.name}</h2>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showPopup && <CreateProjectPopup onClose={() => setShowPopup(false)} onProjectCreated={handleProjectCreated} />}
        </div>
    );
}

export default Projects;
