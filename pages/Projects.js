import React, { useState } from "react";

import { BsFilter } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import Badge from "../components/Badge";
import CollectionModal from "../components/project/CollectionModal";
import CreditBadge from "../components/Creditbadge";
import IconButton from "../components/IconButton";
import SearchBar from "../components/SearchBar";
import ProjectOptionsMenu from "../components/project/ProjectsOptionMenu";
import Sidebar from "../components/sidebar";
import NewProjectModal from "../components/project/NewProjectModal";
import ModalWrapper from "../components/ModalWrapper";

const ProjectPage = () => {
  // const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [newProjectModalOpen, setNewProjectModalOpen] = useState(false);

  const openNewProjectModal = () => {
    setNewProjectModalOpen(true);
  };

  const closeNewProjectModal = () => {
    setNewProjectModalOpen(false);
  };

  const addNewProject = () => {
    // Implement logic to add a new project
    console.log("Add New Project");
    closeNewProjectModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const collections = [
    {
      id: 1,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 5,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 5,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 2,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },

    {
      id: 3,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
    {
      id: 4,
      title: "Winston garage",
      icon: <BsFilter />,
      count: 4,
      description: "description asdsa faefa asd ada",
    },
  ];

  // Add a new project to Firestore
  const addProject = async () => {};

  // Delete a project from Firestore
  const deleteProject = async (id) => {};

  // Toggle project editor
  const toggleEditor = (project) => {
    setSelectedProject(project);
  };

  const openOptionsMenu = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeOptionsMenu = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col lg:flex-row ml-20 h-screen overflow-hidden scrollbar-thin">
      <Sidebar />
      <div className="flex-grow p-8">
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-2xl font-bold">Projects</h1>
          <CreditBadge credits={5} />
        </div>

        <div className="flex">
          {/* Collection List Section */}
          <div className="w-2/5 pl-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-normal mb-2 text-navblue border-b-2 border-navblue">
                Collection <Badge color="blue" value="2" />
              </h3>
              <IconButton
                icon={<FiPlus className="mr-2" />}
                text="New Collection"
                onClick={openModal}
              />
            </div>
            <div className="flex">
              <SearchBar className="w-4/5" />
              <button className="w-1/5 flex justify-center items-center gap-1">
                {" "}
                <BsFilter size="20px" />
                Sort
              </button>
            </div>

            {/* List of Collections */}
            <div className="mt-4">
              {/* Example Collection Block */}
              {collections.map((item) => (
                <div
                  className="border-2 p-4 mb-2 flex gap-3 cursor-pointer"
                  key={item.id}
                >
                  {item.icon}
                  <p className="text-sm text-gray-600">{item.title}</p>
                  <Badge color="blue" value={item.count} />
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Component */}
          <CollectionModal isOpen={isModalOpen} onClose={closeModal} />

          {/* Vertical Line */}
          <div className="border-l-5 border-gray-300 mx-4"></div>

          {/* Project Section */}
          <div className="w-3/5 pl-4 ml-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-normal mb-2 text-navblue cursor-pointer border-b-2 border-navblue">
                Projects
              </h3>
              <IconButton
                icon={<FiPlus className="mr-2" />}
                text="New Project"
                onClick={openNewProjectModal}
              />
            </div>

            {/* Conditionally Render Input Field, Sort Button, and List of Projects */}
            {projects && projects.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <SearchBar className="w-4/5" />
                  <button className="w-1/5 flex justify-center items-center gap-1">
                    <BsFilter size="20px" />
                    Sort
                  </button>
                </div>

                {/* Individual Projects */}
                <div>
                  {projects.map((project) => (
                    <div
                      className="border-b p-4 flex items-center justify-between cursor-pointer relative"
                      key={project.id}
                    >
                      <div className="flex items-center gap-3">
                        {/* Project Icon */}
                        {project.icon}

                        {/* Project Title */}
                        <p className="text-sm text-gray-600">{project.title}</p>
                      </div>

                      {/* Kebab Menu Icon */}
                      <CiMenuKebab
                        onClick={() => openOptionsMenu(project.id)}
                      />

                      {/* Conditionally Render Options Menu */}
                      {selectedProject === project.id && (
                        <ProjectOptionsMenu onClose={closeOptionsMenu} />
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center mt-40">
                <h2 className="opacity-50">
                  Select any collections to display projects
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* New Project Modal */}

      <NewProjectModal
        isOpen={newProjectModalOpen}
        onClose={closeNewProjectModal}
        onAddProject={addNewProject}
      />
    </div>
  );
};

export default ProjectPage;
