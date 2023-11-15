import { useState, useEffect } from "react";
import axios from "axios";

const MainEventElement = () => {
  const [element, setElement] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get("/get_festa");
      setElement(result.data);
      console.log(result.data);
    })();
  }, []);
  return (
    <>
      <p className="today-event-suggestion">최근 행사 추천</p>
      <div className="today-event-wrap">
        <div className="each-event-box">
          <img src={`/src/img/festa/${element.at(4)?.fields.festival_img.at(0)}`} alt="" />
          <p className="each-event-title">{element.at(0)?.fields.festival_title}</p>
          <p className="each-event-date">행사기간 : {element.at(0)?.fields.festival_date}</p>
        </div>
        <div className="each-event-box">
          <img src={`/src/img/festa/${element.at(13)?.fields.festival_img.at(0)}`} alt="" />
          <p className="each-event-title">{element.at(1)?.fields.festival_title}</p>
          <p className="each-event-date">행사기간 : {element.at(1)?.fields.festival_date}</p>
        </div>
      </div>
    </>
  );
};

export default MainEventElement;
