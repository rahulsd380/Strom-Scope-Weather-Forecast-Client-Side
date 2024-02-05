import toast, { Toaster } from "react-hot-toast";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { MdOutlineAirplanemodeInactive } from "react-icons/md";
import useAxiosClient from "../../hooks/useAxiosClient";
import useAllUser from "../../hooks/useAllUser";
import { MdAirplanemodeActive } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";


const AllUserTable = ({ user, index }) => {
    const { _id, name, email, status, addedDate } = user;
    const axiosUser = useAxiosClient();
    const [, , refetch] = useAllUser();

    //Update user status active to inactive
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


    //Update user status inactive to active
      const handleMarkAsActive = (item) => {
        axiosUser.patch(`/users/active/${item._id}`).then((res) => {
          console.log(res.data);
          const toastId = toast.loading("Updating status...");
        //   refetch();
          if (res.data.modifiedCount > 0) {
            toast.success(` ${name}'s status changed to active`, {
              id: toastId,
              duration: 3000
            });
            refetch();
          }
        });
      };


    //   Delete user functionality
    const handleDeleteUser = (item) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosUser.delete(`/users/${item._id}`).then((res) => {
              console.log(res);
              if (res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "User removed successfully.",
                  icon: "success",
                });
                refetch();
              }
            });
          }
        });
      };


    return (
            <tr className="bg-gradient-to-r from-slate-100 to-emerald-100 border-b-1 pb-2 border-gray-300">
      <td>{index + 1}</td>
      <td className="flex items-center gap-2">
      <FaUserCircle className="text-4xl text-blue-500"></FaUserCircle>
      <div className="avatar online">
  <div className="w-10 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
        {name}
        </td>
      <td>{email}</td>
      <td>{addedDate}</td>
      <td>{status}</td>
      <td>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {handleDeleteUser(user)}}
            className="p-2 border rounded-md bg-gray-50 flex justify-center items-center tooltip text-rose-600"
            data-tip="Delete Info"
          >
            <MdDelete></MdDelete>
          </button>

          

          {
            status == "active" ? 
            <button
            onClick={() => {handleMarkAsInactive(user)}}
            className="p-2 border rounded-md bg-gray-50 flex justify-center items-center tooltip text-orange-600"
            data-tip="Mark As Inactive"
          >
            <MdOutlineAirplanemodeInactive></MdOutlineAirplanemodeInactive>
          </button>

          :
        <button
            onClick={() => {handleMarkAsActive(user)}}
            className="p-2 border rounded-md bg-gray-50 flex justify-center items-center tooltip text-green-600"
            data-tip="Mark As Inactive"
          >
            <MdAirplanemodeActive></MdAirplanemodeActive>
          </button>

          }

          

          <div className="">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              onClick={() =>
                document.getElementById(`my_modal_${_id}`).showModal()
              }
              className="p-2 border rounded-md bg-gray-50 flex justify-center items-center text-sky-600 tooltip"
              data-tip="Update or Add Info"
            >
              <FaUserEdit></FaUserEdit>
            </button>
            <dialog id={`my_modal_${_id}`} className="modal">
              <div className="modal-box bg-gray-200">
                <h3 className="font-bold text-lg text-gray-600 mb-6">
                  Add more information about yourself
                </h3>
                {/* onSubmit={(e) => handleUpdateTask(e, _id)} */}
                <form >
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <p className="mb-1 font-semibold text-gray-600">Country</p>
                      <input
                        required
                        name="country"
                        className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                        type="text"
                        placeholder="Your country"
                      />
                    </div>

                    <div>
                      <p className="mb-1 font-semibold text-gray-600">
                        Gender
                      </p>
                      <select
                      required
                        name="gender"
                        className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                      >
                        <option disabled selected>
                          Select
                        </option>
                        <option value="low">Male</option>
                        <option value="moderate">Female</option>
                        <option value="moderate">Prefer not to say</option>
                      </select>
                    </div>


                    <div>
                      <p className="mb-1 font-semibold text-gray-600">Date of Birth</p>
                      <input
                        required
                        name="dob"
                        className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                        type="date"
                      />
                    </div>

                    <div>
                      <p className="mb-1 font-semibold text-gray-600">Phone Number</p>
                      <input
                        required
                        name="phone"
                        className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
                        type="number"
                        placeholder="+880 11324334"
                      />
                    </div>

                    <div>
                      <p className="mb-1 font-semibold text-gray-600">Profile Picture</p>
                      <input required type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
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
        </div>
      </td>
      <Toaster position="bottom-center" reverseOrder={false} />
    </tr>
    );
};

export default AllUserTable;