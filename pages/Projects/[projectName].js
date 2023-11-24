import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../../components/dashboard/Sidebar'; // Adjust the path as per your directory structure
import DaisyUIMenu from '../../components/dashboard/DaisyUIMenu';
import AlertBadge from '../../components/dashboard/AlertBadge'; // Assuming you want to include this as well

const ProjectPage = () => {
    const router = useRouter();
    const { projectName } = router.query;
    const [projectData, setProjectData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };


    useEffect(() => {
        if (projectName) {
            setIsLoading(true);
            setError(null);
            // Replace with your actual API call to fetch project data
            fetch(`https://api2.elixcent.com/projects/${projectName}`)
                .then(response => response.json())
                .then(data => {
                    setProjectData(data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching project data:', err);
                    setError('Failed to load project data.');
                    setIsLoading(false);
                });
        }
    }, [projectName]);

    return (
        <div className="flex h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />
                <AlertBadge trialDays={7} /> {/* Remove if not required */}

                <div className="flex-1 p-10">
                    <h1 className="text-2xl font-bold mb-5">Project: {projectName}</h1>
                    {isLoading && <div>Loading project data...</div>}
                    {error && <div className="text-red-500">{error}</div>}
                    {projectData && (
                        <div>
                            {/* Render your project data here */}
                            <p>{projectData.description}</p>
                            {/* Additional project details */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
