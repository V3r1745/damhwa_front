import axios from "axios";
import { useEffect } from "react";

const EventElement = (props) => {
  return (
    <div className="event-each-box">
      <img src={`/src/img/festa/${props.img.at(0)}`} />
      <p className="event-title">{props.title}</p>
      <p className="event-date">{props.date}</p>
    </div>
  );
};

export default EventElement;
