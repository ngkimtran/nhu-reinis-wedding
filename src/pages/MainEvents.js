import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Event from "../components/Event";
import Headline from "../components/Headline";

const MainEvents = () => {
  return (
    <div className="mainevents-page">
      <Header />
      <Headline>Special &#38; Upcoming Events</Headline>
      <Event
        title="Pre-party"
        time="0:00 PM - 0:00 PM"
        date="June 25, 2023"
        place="ABC DEFG"
      />
      <Event
        title="Wedding ceremony"
        time="0:00 PM - 0:00 PM"
        date="June 25, 2023"
        place="ABC DEFG"
      />
      <Footer />
    </div>
  );
};

export default MainEvents;
