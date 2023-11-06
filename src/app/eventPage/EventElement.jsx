const EventElement = () => {
  const eventElement = { "online-title": ["제목1", "제목2", "제목3"], "online-date": ["행사일정: 2023-10-11 ~ 2023-10-13", "행사일정: 2023-10-11 ~ 2023-10-13", "행사일정: 2023-10-11 ~ 2023-10-13"], "offline-title": ["제목1", "제목2", "제목3"], "offline-date": ["행사일정: 2023-10-11 ~ 2023-10-13", "행사일정: 2023-10-11 ~ 2023-10-13", "행사일정: 2023-10-11 ~ 2023-10-13"] };
  let onlineElement = eventElement["online-title"].map((v, i) => <div key={i} className="event-each-box">
    <img src="/" />
    <p className="event-title">{v}</p>
    <p className="event-date">{eventElement["online-date"][i]}</p>
  </div>)
  let offlineElement = eventElement["offline-title"].map((v, i) => <div key={i} className="event-each-box">
    <img src="/" />
    <p className="event-title">{v}</p>
    <p className="event-date">{eventElement["offline-date"][i]}</p>
  </div>)
  return [onlineElement, offlineElement];
}

export default EventElement;