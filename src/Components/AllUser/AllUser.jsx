import Lottie from "lottie-react";
import { Toaster } from "react-hot-toast";
import { FaTasks } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import useAllUser from "../../hooks/useAllUser";
import finding from "../../../public/finding.json"
import AllUserTable from "./AllUserTable";


const AllUser = () => {
    const [allUser, isLoading, ] = useAllUser();
    return (
        <div className="max-w-7xl mx-auto pb-10">
      <div className="flex gap-3 md:gap-0 flex-wrap items-center justify-between">
        <div>
        <h1 className="text-2xl text-gray-500 font-bold flex items-center gap-2">
          <FaTasks className="text-blue-400"></FaTasks> Manage All Tasks
        </h1>
        </div>

        <div className="flex-col md:flex md:flex-row gap-3 items-center space-y-3 md:space-y-0">
          <div className="flex items-center gap-2">
            <p className="text-gray-600 font-semibold">Status Filter:</p>
            <details className="dropdown">
              <summary className="bg-white border border-gray-300 hover:cursor-pointer hover:bg-teal-500 hover:text-white transition duration-300 p-2 rounded-md flex items-center gap-3">
                Filter <IoIosArrowDown></IoIosArrowDown>
              </summary>
              {/* <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a onClick={() => handleSortByCompleted("Completed")}>
                    Completed
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSortByTodo("to-do")}>To-do</a>
                </li>
                <li>
                  <a onClick={() => handleSortByOnGoing("On-going")}>
                    On-going
                  </a>
                </li>
              </ul> */}
            </details>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-gray-600 font-semibold">Due Date Filter:</p>
            {/* <input
              type="date"
              onChange={(e) => handleDueDateFilter(e.target.value)}
              value={dueDateFilter || ""}
              className="border border-gray-300 px-2 py-1 rounded"
            /> */}
          </div>
          <Link to={"/dashboard/addTask"}>
            <button className="text-white font-semibold px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500  transition duration-300 rounded-md text-center">
              Add New Task
            </button>
          </Link>
          
        </div>
        
      </div>

      <div className="overflow-x-auto pt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white text-sm bg-gradient-to-r from-cyan-500 to-blue-500">
              <th>SL.</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Added Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="w-48">
                <Lottie animationData={finding}></Lottie>
              </div>{" "}
            </div>
          ) : (
            <tbody>
              {allUser.map((user, index) => (
                <AllUserTable
                  key={user._id}
                  user={user}
                  index={index}
                ></AllUserTable>
              ))}
            </tbody>
          )}
        </table>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
    );
};

export default AllUser;