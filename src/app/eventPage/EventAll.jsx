import EventAllElements from "./EventAllElement";

const EventAll = () => {
  const Element = EventAllElements();
  return <>
    <main className="event-all-main">
      <article>
        <div className="text-box">
          <i className="xi-list-dot" />
          <p>전체 행사</p>
        </div>
        <section>
          <div className="event-all-wrap">
            {Element}
          </div>
        </section>
      </article>
    </main>
  </>
};

export default EventAll;