import React, { useContext, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Context } from "../../context/ApiContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { reqResApi } from "../../constants/constants";
import toast from "react-hot-toast";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import IconButton from "../shared/IconButton";
import SearchUserBox from "./SearchUserBox";

const UserListTable = () => {
  const {
    users,
    setUsers,
    totalPages,
    page,
    setPage,
    isLoading,
    startLoading,
    stopLoading,
  } = useContext(Context);
  const [userToDelete, setUserToDelete] = useState({});
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  const goToEditUser = (userId) => {
    navigate("/edit/user/" + userId);
  };
  const openDeleteModal = (desiredUser) => {
    setOpen(true);
    setUserToDelete(desiredUser);
  };

  const closeDeleteModal = () => {
    setOpen(false);
    setUserToDelete({});
  };

  const deleteUserHandler = async () => {
    if (!userToDelete) return;
    startLoading();
    try {
      const { data } = await axios.delete(
        reqResApi + "/users/" + userToDelete?.id
      );
      const remainedUsers = users.filter((user) => user.id !== userToDelete.id);
      setUsers(remainedUsers);
      toast.success(`User with ID ${userToDelete.id} deleted`);
      setUserToDelete({});
      closeDeleteModal();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete user");
    } finally {
      stopLoading();
    }
  };
  return (
    <div className="container mx-auto py-2">
      <SearchUserBox />
      <div className="overflow-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">FIRST NAME</th>
              <th className="py-2 px-4 border-b">LAST NAME</th>
              <th className="py-2 px-4 border-b">EMAIL</th>
              <th className="py-2 px-4 border-b text-left">AVATAR</th>
              <th className="py-2 px-4 border-b">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user?.id} className="text-center">
                  <td className="py-2 px-4 border-b">{user?.id}</td>
                  <td className="py-2 px-4 border-b">{user?.first_name}</td>
                  <td className="py-2 px-4 border-b">{user?.last_name}</td>
                  <td className="py-2 px-4 border-b">{user?.email}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={user?.avatar} alt="" />
                    </div>
                  </td>

                  <td className="py-4 px-4 border-b flex gap-6 user?s-center justify-center h-full ">
                    <IconButton
                      icon={<MdEdit />}
                      onClick={() => goToEditUser(user?.id)}
                    />
                    <IconButton
                      icon={<MdDelete />}
                      color="red"
                      onClick={() => openDeleteModal(user)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between user?s-center mt-4">
        <button
          onClick={prevPage}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <Modal open={open} onClose={closeDeleteModal} center>
        <h2 className="text-2xl font-medium">Delete User</h2>
        <p className="py-4">
          Do you really want to{" "}
          <span className="font-medium text-red-500">delete</span> user with{" "}
          <span className="font-medium">ID: {userToDelete?.id}</span>
        </p>
        <div className="flex justify-end gap-2 pt-4">
          <button
            className="px-4 py-2 rounded-md bg-red-500 disabled:bg-red-300 text-white"
            disabled={isLoading}
            onClick={deleteUserHandler}
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UserListTable;
