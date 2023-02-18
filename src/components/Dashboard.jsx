import React, { useState } from "react";
import "../assets/css/common.css";

import { ScheduleData } from "../data/data2";

const Dashboard = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="dashboard">
      <div className="part1">
        {/* Schedule box */}

        <div className="schedbox">
          <div className="sched">
            <span>Schedule</span>
            {ScheduleData.map((item, index) => {
              return (
                  <div
                    className={
                      selected === index ? "schedcourse active" : "schedcourse"
                    }
                    key={index}
                    onClick={() => setSelected(index)}
                  >
                    <span>{item.heading}</span>
                  </div>
              );
            })}
          </div>
          <div className="courseovr">
            <span>Course Overview</span>
            {ScheduleData.map((item, index) => {
              return (
                <div className="courseovrdetails">
                  <div
                    className={
                      selected === index ? "courseovrprogress" : "hide"
                    }
                    key={index}
                    onClick={() => setSelected(index)}
                  >
                    {item.percent}
                  </div>

                  <div className={selected === index ? "courseovrbox" : "hide"}>
                    {item.describe}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance bar box */}
        <div className="performancebarbox">
          <span>Performance bar</span>
        </div>

        {/* My tasks box */}
        <div className="mytasksbox">
          <span>My Tasks</span>
        </div>

      </div>

      <div className="part2"></div>
    </div>
  );
};

export default Dashboard;
