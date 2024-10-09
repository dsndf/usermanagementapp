import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goToUsersList = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <p className="text-2xl font-medium mt-4">
          Oops! Page not found.
        </p>
        <p className="text-lg text-gray-500 mt-2">
          The page you are looking for does not exist.
        </p>

        <button
          onClick={goToUsersList}
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-700 transition duration-200"
        >
          Go to Users List
        </button>
      </div>
    </div>
  );
};

export default NotFound;
