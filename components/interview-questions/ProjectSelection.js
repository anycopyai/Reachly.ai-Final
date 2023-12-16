const ProjectSelection = ({ projects, onChange }) => {
    // Function to handle project selection
    const handleSelect = (event) => {
      if (onChange) {
        onChange(event.target.value);
      }
    };
  
    return (
      <div className="project-selection p-4 bg-white border rounded-md shadow-sm">
        <label htmlFor="project-select" className="block text-sm font-medium text-gray-700">Select Project</label>
        <select
          id="project-select"
          onChange={handleSelect}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select a project</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.name}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default ProjectSelection;
  