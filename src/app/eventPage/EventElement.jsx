const EventElement = () => {
  const eventElement = { "online": ["행사일정: 2023-10-11 ~ 2023-10-13 국내 최초 ESG 친환경 산업 전문 박람회로 .", "행사일정: 2023-10-11 ~ 2023-10-13 국내 최초 ESG 친환경 산업 전문 ㅂㅈㄷㅂㅈㄷㄷ로 .", "행사일정: 2023-10-11 ~ 2023-10-13 국내 최초 ESG 친환ㄴㅇㅎㄴㅇ ."], "offline": ["행사일정: 2023-10-11 ~ 2023-10-13 국내 최초 ESG 친환경 산업 전문 asdasdsd .", "행사일정: 2023-10-11 ~ 2023-10-13 국내 최초 ESG 친환경 산업fddfgdfgdfg .", "행사일정: 2023-10-11 ~ 2023-10-13 국내 최초 ESG 친환경 산fghgfhfhf ."] };
  let onlineElement = eventElement["online"].map((v, i) => <div key={i} className="event-each-box">
    <img src="/" />
    <p>{v}</p>
  </div>)
  let offlineElement = eventElement["offline"].map((v, i) => <div key={i} className="event-each-box">
    <img src="/" />
    <p>{v}</p>
  </div>)
  return [onlineElement, offlineElement];
}

export default EventElement;