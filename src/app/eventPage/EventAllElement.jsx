const EventAllElement = () => {
  const eventElements = { "text": ["text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text"] }
  let eventElement = eventElements["text"].map((v, i) => <div key={i} className="event-all-each-box">
    <img src="/" />
    <p>{v}</p>
  </div>)
  return [eventElement];
}

export default EventAllElement;