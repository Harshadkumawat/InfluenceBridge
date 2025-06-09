import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import useAuthstatus from "../features/hooks/useAuthstatus";

const Privatecomponets = () => {
  const { userExist, userloading } = useAuthstatus();
  if (userloading) {
    return <div>'''''''''Loading</div>;
  }

  return userExist ? <Outlet /> : <Navigate to={"/login"} />;
};

export default Privatecomponets;
