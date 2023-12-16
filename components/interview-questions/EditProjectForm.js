import { useState, useEffect } from 'react';

const EditProjectForm = ({ project, onUpdateProject }) => {
  const [formData, setFormData] = useState({
    // Initialize form fields based on project attributes
    // Example: name: '', description: ''
  });

  useEffect(() => {
    // Update form data when the selected project changes
    if (project) {
      setFormData({
        // Map project attributes to form fields
        // Example: name: project.name, description: project.description
      });
    }
  }, [project]);

  const handleChange = (event) => {
    // Handle changes in form inputs
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateProject(formData); // Pass the updated form data back to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className="edit-project-form">
      {/* Replace below with actual fields based on your project structure */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name || ''}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Add additional fields as needed */}

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Update Project
      </button>
    </form>
  );
};

export default EditProjectForm;
