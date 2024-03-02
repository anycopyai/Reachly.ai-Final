import { MdDelete } from "react-icons/md";

const DeleteProjectForm = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-3">
        <MdDelete />
        <h3 className="text-base font-semibold ">Delete Project</h3>
      </div>
      <p>Are you sure you want to delete this Project?</p>
      <p>Once Delete it CANNOT be undone</p>

      <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
        Please type {"Project 2"} to confirm
      </label>
      <input
        type="text"
        className="w-full border p-2 mb-4"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
        placeholder="Enter here"
      />
      <div className="flex justify-end gap-3">
        <button
          className="bg-[#FF0F00] text-white px-4 py-2 mr-2 "
          onClick={handleCreateCollection}
        >
          Delete
        </button>
        <button
          className="border-1 text-gray-700 px-4 py-2 "
          onClick={() => onClose()}
        >
          Cancel
        </button>
      </div>

      {showAlert && (
        <Alert
          title="Project deleted successfully!"
          onClose={handleCloseAlert}
        />
      )}
    </>
  );
};

export default DeleteProjectForm;
