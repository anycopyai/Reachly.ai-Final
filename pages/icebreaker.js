import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../components/dashboard/Sidebar'; // Adjust the path as per your directory structure
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import IcebreakerGenerator from '../components/icebreakers/IcebreakerGenerator'; // Ensure this path is correct

const icebreaker = () => {
    const router = useRouter();
    const { projectName } = router.query;
    const [projectData, setProjectData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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

    // Dummy data for icebreakers
    const icebreakers = [
        "I was particularly impressed by the innovative approach your team took on [Project Name].",
        "Your work on [Project Name] really stands out as a testament to your team's skill and dedication.",
        "Seeing the results you achieved with [Project Name], it's clear your team are experts in your field."
    ];

    return (
        <div className="flex h-screen bg-white"> {/* Changed background color to white */}
            <Sidebar />
            <div className="flex flex-col flex-grow overflow-auto"> {/* Adjusted for fixed sidebar and scrollable content */}
                <DaisyUIMenu />

                <div className="p-10">
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

                    {/* Icebreaker Generator Component */}
                    <IcebreakerGenerator icebreakers={icebreakers.map(icebreaker => icebreaker.replace("[Project Name]", projectName))} />
                </div>
            </div>
        </div>
    );
};

export default icebreaker;
