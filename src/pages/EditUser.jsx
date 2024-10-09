import React, { useContext, useEffect, useState } from "react";
import FormInput from "../components/shared/FormInput";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { reqResApi } from "../constants/constants";
import { Context } from "../context/ApiContext";
import Loader from "../components/shared/Loader";
import { useInputValidation } from "../hooks/useInputValidation";
import toast from "react-hot-toast";

const EditUser = () => {
  const { isLoading, startLoading, stopLoading, setUsers } =
    useContext(Context);
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const validateEmailHandler = (val) => {
    if (!val) return { isError: true, error: "Email cannot be empty." };
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val))
      return { isError: true, error: "Invalid email." };
    return { isError: false, error: "" };
  };

  const validateFirstNameHandler = (val) => {
    if (!val) return { isError: true, error: "First name cannot be empty." };
    if (val.length < 3)
      return {
        isError: true,
        error: "First name must have at least 3 letters",
      };
    return { isError: false, error: "" };
  };

  const validateLastNameHandler = (val) => {
    if (!val) return { isError: true, error: "Last name cannot be empty." };
    if (val.length < 3)
      return {
        isError: true,
        error: "Last name must have at least 3 letters",
      };
    return { isError: false, error: "" };
  };

  const firstName = useInputValidation("", validateFirstNameHandler);
  const lastName = useInputValidation("", validateLastNameHandler);
  const email = useInputValidation("", validateEmailHandler);

  const fetchUser = async () => {
    try {
      startLoading();
      const { data: result, status } = await axios.get(
        reqResApi + "/users/" + id
      );
      setUser(result.data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        toast.error("User not found");
        navigate("/");
      } else toast.error("Failed to fetch user");
    } finally {
      stopLoading();
    }
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      const { data: result } = await axios.put(reqResApi + "/users/" + id, {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
      });
      setUser(result);
      toast.success("User updated");
    } catch (error) {
      toast.error("Failed to update user");
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    fetchUser(id);
  }, [id]);
  useEffect(() => {
    if (user) {
      firstName.setValue(user.first_name);
      lastName.setValue(user.last_name);
      email.setValue(user.email);
    }
  }, [user]);

  console.log({ user });
  return (
    <div className="h-[100vh] flex justify-center items-center p-6">
      {isLoading ? (
        <Loader label="Fetching user..." />
      ) : (
        <div className=" w-[400px]">
          <h3 className="text-center text-2xl ">EDIT LOGIN</h3>
          <form
            onSubmit={updateUserHandler}
            action=""
            className="w-full items-center gap-4 flex flex-col  p-4"
          >
            <FormInput
              placeholder={"Enter the first name"}
              type={"text"}
              value={firstName.value}
              changeHandler={firstName.changeHandler}
              error={firstName.error}
            />
            <FormInput
              placeholder={"Enter your last name"}
              type={"text"}
              value={lastName.value}
              changeHandler={lastName.changeHandler}
              error={lastName.error}
            />
            <FormInput
              placeholder={"Enter your email"}
              type={"text"}
              value={email.value}
              changeHandler={email.changeHandler}
              error={email.error}
            />
            <button
              disabled={
                !email.value ||
                !firstName.value ||
                !lastName.value ||
                email.error ||
                firstName.error ||
                lastName.error
              }
              type="submit"
              className=" px-4 disabled:bg-blue-300 py-2 rounded-md w-full bg-blue-500 text-white"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditUser;
