import React from "react";

const Event = ({ title, time, date, place }) => {
  return (
    <div className="event-container">
      <div className="event-title">
        <p className="text-large">{title}</p>
      </div>
      <p className="text-small"> {time}</p>
      <p className="text-small"> {date}</p>
      <p className="text-small"> {place}</p>
    </div>
  );
};

export default Event;
