import React, { useContext, useEffect, useState } from "react";
import Badge from "../../../components/Badge";
import AllTasks from "./AllTasks/AllTasks";
import CompletedTasks from "./CompletedTasks/CompletedTasks";
import OngoingTasks from "./OngoingTasks/OngoingTasks";
import { FaRegSquare } from "react-icons/fa";
import useLoadAllTasksByEmail from "../../../hooks/useLoadAllTasksByEmail";

const UserHome = () => {
  const {
    isLoading,
    error,
    data: allTasks,
    refetch,
  } = useLoadAllTasksByEmail();
  console.log("All Tasks===> ", allTasks);

  return (
    <div className="bg-gray-200 min-h-screen px-4 pb-10 pt-5">
      <div className="flex md:flex-row flex-col gap-5">
        <Badge></Badge>
        <Badge></Badge>
        <Badge></Badge>
      </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-5">
            <AllTasks allTasks={allTasks}></AllTasks>

            <OngoingTasks allTasks={allTasks}></OngoingTasks>

            <CompletedTasks allTasks={allTasks}></CompletedTasks>
          </div>
    </div>
  );
};

export default UserHome;
