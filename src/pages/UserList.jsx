
import UserListTable from "../components/specific/UserListTable";
const UserList = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col ">
      <h4 className="text-2xl font-medium text-gray-700 text-center lg:text-left">
        USER LIST
      </h4>
      <UserListTable />
    </div>
  );
};

export default UserList;
