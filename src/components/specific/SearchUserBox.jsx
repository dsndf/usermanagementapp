import React, { useContext } from "react";
import FormInput from "../shared/FormInput";
import { Context } from "../../context/ApiContext";

const SearchUserBox = () => {
  const { search } = useContext(Context);
  return (
    <div className="py-2">
      <form action="">
        <FormInput
          value={search.value}
          changeHandler={search.changeHandler}
          placeholder={"Search user by name or email or id"}
        />
      </form>
    </div>
  );
};

export default SearchUserBox;
