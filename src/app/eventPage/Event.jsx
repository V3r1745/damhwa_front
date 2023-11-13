import EventElements from "./EventElement";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Event = () => {
  const [element, setElement] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get("/get_festa");
      setElement(result.data);
      console.log(result.data);
    })();
  }, []);
  return (
    <main className="event-main">
      <article>
        <div className="text-box">
          <i className="xi-central-signal" />
          <p>온라인</p>
        </div>
        <section className="event-online-wrap">
          {element.slice(0, 3).map((v) => {
            return (
              <EventElements
                title={v.fields.festival_title}
                img={v.fields.festival_img}
                key={v.pk}
                date={v.fields.festival_date}
              />
            );
          })}
        </section>
        <div className="text-box">
          <i className="xi-group" />
          <p>오프라인</p>
        </div>
        <section className="event-offline-wrap">
          {element.slice(3, 6).map((v) => {
            return (
              <EventElements
                title={v.fields.festival_title}
                img={v.fields.festival_img}
                key={v.pk}
                date={v.fields.festival_date}
              />
            );
          })}
        </section>
        <Link to="/eventAll">
          <div className="event-show-all">
            <p className="event-show-all-text">행사 전체 보기</p>
            <i className="fa-solid fa-caret-down" />
          </div>
        </Link>
      </article>
    </main>
  );
};

export default Event;
