import React from "react";

import Dashboard from "../components/Dashboard";
import MySchedule from "../components/MySchedule";
import Calender from "../components/Calender";
import MyRoadmap from "../components/MyRoadmap";
import MyTasks from "../components/MyTasks";
import MyGrades from "../components/MyGrades";
import { Route, Routes } from "react-router-dom";

const Sidepage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/myschedule" element={<MySchedule />} />
      <Route exact path="/calender" element={<Calender />} />
      <Route exact path="/myroadmap" element={<MyRoadmap />} />
      <Route exact path="/mytasks" element={<MyTasks />} />
      <Route exact path="/mygrades" element={<MyGrades />} />
    </Routes>
  );
};

export default Sidepage;
