// 4page(행사) MK

import Title from "./eventfile/title"

const Event = () => {
    return <>
        <meta />
            {/* 온라인 전체박스 */}
            <div className="event-online-titlebox">
                <h2>온라인</h2>
                <div>
                    <Title src="" Title="" />
                </div>
            </div>
            {/* 오프라인 전체박스 */}
            <div className="event-offline-titlebox">
                <h2>오프라인</h2>
                <div>
                    {/* 각 타이틀 */}
                    <div>
                        <img src="" alt="" />
                        <p></p>
                    </div>
                </div>
            </div>

            {/* 모든 행사 보기 버튼 */}
            <button className="allevent-move-btn">
                <p>모든 행사 보기</p>
            </button>
    </>
  };
  
  export default Event;