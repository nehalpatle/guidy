// Sidebar imports

import {
  UilEstate,
  UilSchedule,
  UilCalender,
  UilMap,
  UilFileCheckAlt,
  UilChartLine,
  UilUserCircle,
  UilSetting,
  UilSignout,
} from "@iconscout/react-unicons";

// Sidebar data
export const SidebarData = [
  {
    icon: UilEstate,
    name: "Dashboard",
    to: "/userdashboard/",
  },
  {
    icon: UilSchedule,
    name: "My Schedules",
    to: "/userdashboard/myschedule",
  },
  {
    icon: UilCalender,
    name: "Calender",
    to: "/userdashboard/calender",
  },
  {
    icon: UilMap,
    name: "My Roadmap",
    to: "/userdashboard/myroadmap",
  },
  {
    icon: UilFileCheckAlt,
    name: "My Tasks",
    to: "/userdashboard/mytasks",
  },
  {
    icon: UilChartLine,
    name: "My Grades",
    to: "/userdashboard/mygrades",
  },
];

// Sidebar bottom data
export const ProfileDD = [
  {
    icon: UilUserCircle,
    name: "Edit Profile",
    to: "/editprofile",
  },
  {
    icon: UilSetting,
    name: "Setting",
    to: "/setting",
  },
  {
    icon: UilSignout,
    name: "Log Out",
    to: "/",
  },
];
