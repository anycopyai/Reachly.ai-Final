import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import Sidebar from '../components/sidebar';

const ProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [newProjectName, setNewProjectName] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);

    // Fetch projects from Firestore
    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProjects(projectsData);
            setLoading(false);
        };

        fetchProjects();
    }, []);

    // Add a new project to Firestore
    const addProject = async () => {
        if (newProjectName.trim() !== '') {
            const docRef = await addDoc(collection(db, "projects"), { name: newProjectName });
            setProjects([...projects, { id: docRef.id, name: newProjectName }]);
            setNewProjectName('');
        }
    };

    // Delete a project from Firestore
    const deleteProject = async (id) => {
        await deleteDoc(doc(db, "projects", id));
        setProjects(projects.filter(project => project.id !== id));
    };

    // Toggle project editor
    const toggleEditor = (project) => {
        setSelectedProject(project);
    };

    return (
        <div className="flex flex-col lg:flex-row ml-20 h-screen  overflow-hidden scrollbar-thin">
            <Sidebar />
            <div className="flex-grow p-8">
                <div className="mb-6">
                    {/* Description Section */}
                    {/* ... */}
                </div>

                <div className="flex">
                    {/* Project List Section */}
                    <div className="w-1/2">
                        {loading ? (
                            <p>Loading projects...</p>
                        ) : (
                            projects.map(project => (
                                <div key={project.id} className="flex items-center justify-between p-3 mb-2 bg-gray-100 rounded-md shadow-sm">
                                    <span className="font-semibold cursor-pointer" onClick={() => toggleEditor(project)}>{project.name}</span>
                                    <button onClick={() => deleteProject(project.id)} className="text-red-500 hover:text-red-600 transition duration-300 ease-in-out">
                                        <FiTrash2 />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Collection Add Section */}
                    <div className="w-1/2 pl-4">
                        {selectedProject && (
                            <div>
                                <h3 className="font-semibold mb-2">Edit Project: {selectedProject.name}</h3>
                                {/* Add form or details for editing project here */}
                                {/* Add Collection Button */}
                                <button className="p-2 bg-green-500 text-white rounded-md flex items-center">
                                    <FiPlus className="mr-2" /> Add Collection
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
