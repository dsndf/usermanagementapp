import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authToken, redirect }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) navigate(redirect);
  }, [authToken]);
  return children;
};

export default Protected;
