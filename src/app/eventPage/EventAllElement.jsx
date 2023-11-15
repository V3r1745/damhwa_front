const EventAllElement = (props) => {
  return (
    <div className="event-all-each-box">
      <img src={`/src/img/festa/${props.img.at(0)}`} />
      <p className="event-date">{props.date}</p>
      <p className="event-title">{props.title}</p>
    </div>
  );
};

export default EventAllElement;
