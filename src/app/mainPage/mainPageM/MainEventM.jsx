const MainEventElement = () => {
  return <>
    <p className="today-event-suggestion">최근 행사 추천</p>
    <div className="today-event-wrap">
      <div className="each-event-box">
        <img src="./src/img/main/1page_img1.jpg" alt="" />
        <p className="each-event-title">2023 환경창업대전</p>
        <p className="each-event-date">행사기간 : 2024.06 </p>
      </div>
      <div className="each-event-box">
        <img src="./src/img/main/1page_img1.jpg" alt="" />
        <p className="each-event-title">2023 환경창업대전</p>
        <p className="each-event-date">행사기간 : 2024.06</p>
      </div>
    </div>
  </>;
};

export default MainEventElement;