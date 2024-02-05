import toast, { Toaster } from "react-hot-toast";
import { FaPersonRunning } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdCancelPresentation, MdDelete, MdModeEditOutline } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { MdOutlineAirplanemodeInactive } from "react-icons/md";
import useAxiosClient from "../../hooks/useAxiosClient";
import useAllUser from "../../hooks/useAllUser";


const AllUserTable = ({ user, index }) => {
    const { _id, name, email, status, addedDate } = user;
    const axiosUser = useAxiosClient();
    const [, , refetch] = useAllUser();
    const handleMarkAsInactive = (item) => {
        axiosUser.patch(`/users/inactive/${item._id}`).then((res) => {
          console.log(res.data);
          const toastId = toast.loading("Updating status...");
        //   refetch();
          if (res.data.modifiedCount > 0) {
            toast.success(` ${name}'s status changed to inactive`, {
              id: toastId,
              duration: 3000
            });
            refetch();
          }
        });
      };
    return (
            <tr className="bg-gradient-to-r from-slate-100 to-emerald-100 border-b-1 pb-2 border-gray-300">
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{addedDate}</td>
      <td>{status}</td>
      <td>
        <div className="flex items-center gap-2">
        {/* onClick={() => {
              handleDeleteTask(task);
            }} */}
          <button
            
            className="p-2 border rounded-md bg-gray-50 flex justify-center items-center tooltip text-rose-600"
            data-tip="Delete Info"
          >
            <MdDelete></MdDelete>
          </button>

          <button
            onClick={() => {handleMarkAsInactive(user)}}
            className="p-2 border rounded-md bg-gray-50 flex justify-center items-center tooltip text-orange-600"
            data-tip="Mark As Inactive"
          >
            <MdOutlineAirplanemodeInactive></MdOutlineAirplanemodeInactive>
          </button>

          <div className="">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              onClick={() =>
                document.getElementById(`my_modal_${_id}`).showModal()
              }
              className="p-2 border rounded-md bg-gray-50 flex justify-center items-center text-sky-600 tooltip"
              data-tip="Update Info"
            >
              <MdModeEditOutline></MdModeEditOutline>
            </button>
            <dialog id={`my_modal_${_id}`} className="modal">
              <div className="modal-box bg-gray-200">
                <h3 className="font-bold text-lg text-gray-600 mb-6">
                  Update Task Details
                </h3>
                {/* onSubmit={(e) => handleUpdateTask(e, _id)} */}
                <form >
                  <div className="grid grid-cols-1 gap-5">
                    <div className="mb-2">
                      <p className="mb-1 font-semibold text-gray-600">Title</p>
                      <input
                        required
                        name="title"
                        className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                        type="text"
                        placeholder="Title"
                      />
                    </div>

                    <div className="mb-2">
                      <p className="mb-1 font-semibold text-gray-600">
                        Task Deadline
                      </p>
                      <input
                        required
                        name="deadline"
                        className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                        type="date"
                        placeholder="Enter the deadline"
                      />
                    </div>

                    <div className="mb-2">
                      <p className="mb-1 font-semibold text-gray-600">
                        Priority Level
                      </p>
                      <select
                        name="priority"
                        className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                      >
                        <option disabled selected>
                          Select
                        </option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                        <option value="most important">Most Important</option>
                      </select>
                    </div>

                    <div className="mb-2">
                      <p className="mb-1 font-semibold text-gray-600">
                        Task Description
                      </p>
                      <textarea
                        placeholder="Enter the task description"
                        className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                        name="taskDescription"
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex flex-row-reverse items-center gap-9">
                    <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-md w-full text-center mt-5">
                      Save Changes
                    </button>

                    <div className="modal-action">
                      <form method="dialog" className="flex gap-10 w-full">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="text-gray-500 border border-gray-600 font-semibold px-4 py-2 rounded-md w-full text-center">
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                </form>

                <div className="modal-action hidden">
                  <form method="dialog" className="flex gap-10 w-full">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="text-gray-500 font-semibold px-4 py-2 rounded-md w-full text-center">
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* onClick={() => {
              handleMakeCompleted(task);
            }} */}
          <button
           
            className="p-2 border rounded-md bg-gray-50 flex justify-center items-center text-green-600 tooltip"
            data-tip="Add Extra Info"
          >
            <MdAddCard></MdAddCard>
          </button>
        </div>
      </td>
      <Toaster position="bottom-center" reverseOrder={false} />
    </tr>
    );
};

export default AllUserTable;