import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Protected from "./components/protected/Protected";
import UserList from "./pages/UserList";
import EditUser from "./pages/EditUser";
import Header from "./components/layout/Header";
import "./App.css";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import { useContext } from "react";
import { Context } from "./context/ApiContext";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  const { authToken } = useContext(Context);
  return (
    <div className="user-management-app">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Protected authToken={authToken} redirect={"/login"}>
                <UserList />
              </Protected>
            }
          />
          <Route
            path="/edit/user/:id"
            element={
              <Protected authToken={authToken} redirect={"/login"}>
                <EditUser />
              </Protected>
            }
          />
          <Route
            path="/login"
            element={
              <Protected authToken={!authToken} redirect={"/"}>
                <Login />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster position="bottom-center" />
      <Footer />
    </div>
  );
};

export default App;
