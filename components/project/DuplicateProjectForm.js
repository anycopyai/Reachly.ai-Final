import { MdFileCopy } from "react-icons/md";

const DuplicateProjectForm = () => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 shadow-md w-96">
            <div className="flex  items-center gap-2 mb-3">
              <MdFileCopy />
              <h3 className="text-base font-semibold">Duplicate Project</h3>
            </div>
            <form>
              <label className="flex items-center text-sm font-normal text-gray-700 mb-2">
                Select Project
                <IoIosInformationCircleOutline
                  cursor="pointer"
                  className="ml-1"
                />
              </label>
              <select className="w-full border p-2 mb-4">
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>

              <label className="flex items-center text-sm font-normal text-gray-700 mb-2">
                Select Collection
                <IoIosInformationCircleOutline
                  cursor="pointer"
                  className="ml-1"
                />
              </label>
              <select className="w-full border p-2 mb-4">
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-3">
                <button
                  className=" border-1 text-gray-700 px-4 py-2 "
                  // onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="bg-navblue text-white px-4 py-2 mr-2 "
                  // onClick={onAddProject}
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAlert && (
        <Alert
          title="Project Duplicated successfully!"
          onClose={handleCloseAlert}
        />
      )}
    </>
  );
};

export default DuplicateProjectForm;
