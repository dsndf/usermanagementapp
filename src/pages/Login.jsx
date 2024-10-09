import { useContext } from "react";
import FormInput from "../components/shared/FormInput";
import { useInputValidation } from "../hooks/useInputValidation";
import { Context } from "../context/ApiContext";
import axios from "axios";
import { reqResApi } from "../constants/constants";
import toast from "react-hot-toast";
import Loader from "../components/shared/Loader";
import { createSession } from "../lib/helper";

const Login = () => {
  const validateEmailHandler = (val) => {
    if (!val) return { isError: true, error: "Email is required." };
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val))
      return { isError: true, error: "Invalid email." };
    return { isError: false, error: "" };
  };
  const validatePasswordHandler = (val) => {
    if (!val) return { isError: true, error: "Password is required." };
    if (val.length !== 10)
      return { isError: true, error: "Password must contain 10 characters." };
    return { isError: false, error: "" };
  };

  const email = useInputValidation("", validateEmailHandler);
  const password = useInputValidation("", validatePasswordHandler);
  const { setAuthToken, startLoading, stopLoading, isLoading } =
    useContext(Context);

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      startLoading();
      const { data } = await axios.post(reqResApi + "/login", {
        email: email.value,
        password: password.value,
      });
      setAuthToken(data.token);
      createSession(data.token);
      toast.success("Logged in");
    } catch (error) {
      console.log(error);
      toast.error("Authentication failed");
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center p-6">
      {isLoading ? (
        <Loader label="Authenticating" />
      ) : (
        <div className=" w-[400px]">
          <h3 className="text-center text-2xl ">LOGIN</h3>
          <form
            onSubmit={loginSubmitHandler}
            action=""
            className="w-full items-center gap-4 flex flex-col  p-4"
          >
            <FormInput
              placeholder={"Enter the email"}
              type={"text"}
              value={email.value}
              changeHandler={email.changeHandler}
              error={email.error}
            />
            <FormInput
              value={password.value}
              changeHandler={password.changeHandler}
              error={password.error}
              placeholder={"Enter your password"}
              type={"password"}
            />
            <button
              disabled={
                !password.value || !email.value || email.error || password.error
              }
              type="submit"
              className="px-4 py-2 rounded-md w-full bg-blue-500 disabled:bg-blue-300 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
