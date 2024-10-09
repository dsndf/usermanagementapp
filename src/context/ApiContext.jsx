import React, { createContext, useEffect, useState } from "react";
import { getSessionToken } from "../lib/helper";
import axios from "axios";
import { reqResApi } from "../constants/constants";
import toast from "react-hot-toast";
import { useInputValidation } from "../hooks/useInputValidation";

export const Context = createContext();
const ApiContext = ({ children }) => {
  const [authToken, setAuthToken] = useState(getSessionToken() || null);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);
  const search = useInputValidation("");
  const [usersForFilterAndSearch, setUsersForFilterAndSearch] = useState();

  const fetchUsers = async () => {
    try {
      const { data: result } = await axios.get(
        reqResApi + "/users?page=" + page
      );
      setTotalPages(result.total_pages);
      setUsers(result.data);
      setUsersForFilterAndSearch(result.data); // I have done this for search by name or email functionality
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch users");
    } finally {
    }
  };

  const searchUsers = () => {
    if (!usersForFilterAndSearch?.length) return;

    const nameReg = new RegExp(search.value, "gi");
    const emailReg = new RegExp(search.value, "gi");

    const nameResult = usersForFilterAndSearch.filter((user) =>
      nameReg.test(user.first_name + " " + user.last_name)
    );
    const emailResult = usersForFilterAndSearch.filter((user) =>
      emailReg.test(user.email)
    );
    const idResult = usersForFilterAndSearch.filter(
      (user) => user.id == search.value
    );

    console.log({ nameResult, emailResult });

    if (nameResult.length) setUsers(nameResult);
    else if (emailResult.length) setUsers(emailResult);
    else if (idResult.length) setUsers(idResult);
    else if (!search.value) setUsers(usersForFilterAndSearch);
    else setUsers([]);
  };

  useEffect(() => {
    if (authToken) {
      fetchUsers();
    }
  }, [authToken, page]);

  useEffect(() => {
    searchUsers();
  }, [search.value]);

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        totalPages,
        setPage,
        page,
        authToken,
        setAuthToken,
        startLoading,
        stopLoading,
        isLoading,
        search,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ApiContext;
