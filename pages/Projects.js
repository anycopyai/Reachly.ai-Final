import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
const ProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [newProjectName, setNewProjectName] = useState('');

    // Fetch projects from Firestore
    useEffect(() => {
        const fetchProjects = async () => {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProjects(projectsData);
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

    return (
        <div className="p-8">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="New Project Name"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    className="p-2 border-2 border-gray-300 rounded-md mr-2"
                />
                <button onClick={addProject} className="p-2 bg-blue-500 text-white rounded-md">
                    <FiPlus /> Add Project
                </button>
            </div>
            <div>
                {projects.map(project => (
                    <div key={project.id} className="flex items-center justify-between p-3 border-b-2 border-gray-300">
                        <span>{project.name}</span>
                        <button onClick={() => deleteProject(project.id)} className="text-red-500">
                            <FiTrash2 />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
