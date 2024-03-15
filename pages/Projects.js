import React, { useState } from "react";

import { BsFilter } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import Badge from "../components/Badge";
import CollectionModal from "../components/project/CollectionModal";
import CreditBadge from "../components/Creditbadge";
import IconButton from "../components/IconButton";
import SearchBar from "../components/SearchBar";
import ProjectOptionsMenu from "../components/project/ProjectsOptionMenu";
import Sidebar from "../components/sidebar";
import NewProjectModal from "../components/project/NewProjectModal";
import { useRouter } from "next/router";
import { Dropdown } from "antd";
import { MdAdd } from "react-icons/md";

const ProjectPage = () => {
  // const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectModalOpen, setNewProjectModalOpen] = useState(false);
  const [showresult, setshowresult] = useState(false);
  const router = useRouter();

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

  const items = [
    {
      label: (
        <a href="#" onClick={openModal}>
          <div className="flex items-center gap-4 mb-3">
            <span>
              <img src="/images/ic-collection.svg" alt="collection" />
            </span>
            <h3 className="text-base font-semibold text-[#323232]">
              Add Collection
            </h3>
          </div>
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href="#" onClick={openNewProjectModal}>
          <div className="flex items-center gap-4 mb-3">
            <span>
              <img src="/images/ic-new-project.svg" alt="collection" />
            </span>
            <h3 className="text-base font-semibold text-[#323232]">
              Add Project
            </h3>
          </div>
        </a>
      ),
      key: "1",
    },
  ];

  const sortByItems = [
    {
      label: "Recent",
      key: "0",
    },
    {
      label: "Older",
      key: "1",
    },
    {
      label: "Ascending",
      key: "2",
    },
    {
      label: "Descending",
      key: "3",
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

  const handleCollectionSortDrop = (e) =>{

    console.log(e);

  }

  return (
    <div className="flex flex-col lg:flex-row md:ml-20 h-screen md:overflow-hidden scrollbar-thin">
      <Sidebar />
      <div className="flex-grow m-5">
        <div className="bg-white sticky top-0 pt-4 md:pt-0 z-10">
          <div className="flex md:hidden items-center justify-between">
            <div className="flex items-center gap-1">
              <span>
                <img alt="logo" src="/images/logo.png" className="w-5" />
              </span>
              <p className="text-sm font-medium text-black">Anycopy Ai</p>
              <span className="flex items-center justify-center text-xs bg-[#BFDBFE] text-[#2143B1] px-2 py-1 rounded-full">
                Beta
              </span>
            </div>

            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a className="border border-[#D9D9D9] rounded-sm text-[rgba(0,0,0,0.85)] px-4 py-1 flex items-center gap-3">
                <MdAdd />
                Click me
              </a>
            </Dropdown>
          </div>

          <div className="flex justify-between items-center mt-3 md:mt-0">
            <div className="flex items-center gap-6">
              <span
                onClick={() => router.push("/")}
                className="text-3xl cursor-pointer"
              >
                <FiArrowLeft />
              </span>
              <p className="text-sm md:text-3xl font-medium">Projects</p>
            </div>
            <div className="hidden md:block">
              <CreditBadge credits={5} />
            </div>
          </div>

          <div className="flex gap-5 border-b-2 w-full mt-10 md:hidden">
            <h1
              onClick={() => setshowresult(false)}
              className={`text-sm text-black font-medium p-2 flex items-center gap-1 ${
                !showresult
                  ? `text-navblue border-b-2 border-navblue inline-block`
                  : ``
              }`}
            >
              Collections
              <span className="bg-[#E6F7FF] rounded-full text-xs text-[#0033FF] min-w-[25px] min-h-[25px] flex items-center justify-center">
                5
              </span>
            </h1>
            <h1
              onClick={() => setshowresult(true)}
              className={`text-sm text-black font-medium p-2 ${
                showresult
                  ? `text-navblue border-b-2 border-navblue inline-block`
                  : ``
              }`}
            >
              Projects
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-4 md:mt-10">
          {/* Collection List Section */}
          <div
            className={`md:w-2/5 md:pl-4 ${
              showresult
                ? `hidden col-span-12 md:col-span-4 md:block`
                : `col-span-12 overflow-hidden md:col-span-4`
            }`}
            id="collections"
          >
            <div className="hidden md:flex justify-between items-center mb-6">
              <h3 className="font-normal pb-2.5 text-navblue border-b-2 border-navblue text-sm flex items-center gap-1">
                Collection
                <span className="bg-[#E6F7FF] rounded-full text-xs text-[#0033FF] min-w-[25px] min-h-[25px] flex items-center justify-center">
                  5
                </span>
              </h3>
              <IconButton
                icon={<FiPlus className="mr-2" />}
                text="New Collection"
                onClick={openModal}
              />
            </div>

            <div className="flex gap-4 items-center">
              <SearchBar />
              <div className="flex-1">
                <Dropdown
                  menu={{
                    items: sortByItems,
                    onClick: handleCollectionSortDrop,
                  }}
                  trigger={["click"]}
                >
                  <a className="flex justify-center items-center gap-1 py-1 px-4 bg-[#F5F5F5] text-[rgba(0,0,0,0.85)] rounded-sm whitespace-nowrap">
                    <BsFilter size="20px" />
                    Sort by
                  </a>
                </Dropdown>
              </div>
            </div>

            {/* List of Collections */}
            <div className="mt-4 md:h-screen md:overflow-y-auto scrollbar-thin">
              {/* Example Collection Block */}
              {collections.map((item) => (
                <div
                  className="border px-6 py-3 mb-2 flex gap-3 cursor-pointer rounded-[calc(theme(borderRadius.small)/2)] items-center"
                  key={item.id}
                >
                  {/* {item.icon} */}
                  <img className="h-4" src="images/projectIcon.svg" />
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
          <div
            className={`md:w-3/5 md:pl-4 md:ml-5 overflow-y-auto ${
              !showresult
                ? `hidden col-span-12 md:col-span-8 md:block`
                : `col-span-12 md:col-span-8 md:block`
            }`}
            id="projects"
          >
            <div className="hidden md:flex justify-between items-center mb-5">
              <h3 className="font-normal pb-2.5 text-navblue cursor-pointer border-b-2 border-navblue">
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
                <div className="flex justify-between items-center mb-4 gap-4">
                  <div className="md:w-5/12">
                    <SearchBar />
                  </div>
                  <div>
                    <Dropdown
                      menu={{
                        items: sortByItems,
                        onClick:(e)=>console.log(e.key)
                      }}
                      trigger={["click"]}
                    >
                      <a className="flex justify-center items-center gap-1 py-1 px-4 bg-[#F5F5F5] text-[rgba(0,0,0,0.85)] rounded-sm whitespace-nowrap">
                        <BsFilter size="20px" />
                        Sort by
                      </a>
                    </Dropdown>
                  </div>
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

                   
                        <ProjectOptionsMenu onClose={closeOptionsMenu} isOpen={selectedProject === project.id} />
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
