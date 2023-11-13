import EventAllElements from "./EventAllElement";
import { useEffect, useState } from "react";
import axios from "axios";

const EventAll = () => {
  const [element, setElement] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get("/get_festa");
      console.log(result);
      setElement(result.data);
    })();
  }, []);
  return (
    <main className="event-all-main">
      <article>
        <div className="text-box">
          <i className="xi-list-dot" />
          <p>전체 행사</p>
        </div>
        <section>
          <div className="event-all-wrap">{element.map((v) => {
            return <EventAllElements key={v.pk} img={v.fields.festival_img} title={v.fields.festival_title} date={v.fields.festival_date} />
          })}</div>
        </section>
      </article>
    </main>
  );
};

export default EventAll;
