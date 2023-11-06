// 2page-메인글 (MK)
import { Outlet } from "react-router-dom";

// 1920 X 1080
// vw로 환산해서 만들기

import { React } from 'react';

const Intro = () => {
  return (
    <>
      <main className="intro-main">
        {/* 컨텐츠 오버 박스 */}
        <div className="intro-box">
          {/* 설립취지 폰트박스 */}
          <div className="effect-box">
            <h1 className="effect-title">설립취지</h1>
            <p className="effect-str">
              친환경 제품을 고객 편의에 맞게 제공하고 이벤트, 행사 등 환경과
              관련한 여러 정보들을 다함께 공유할 수 있는 가치있는 서비스를
              만들고자 시작하였습니다.
            </p>
          </div>
          {/* 설립목표 폰트박스 */}
          <div className="target-box">
            <h1 className="target-title">설립목표</h1>
            <p className="target-str">
              고객이 원하는 상품이 무엇인지 도와주고 검색을 했을 때, 자동으로
              관련 상품을 알려주는 서비스
            </p>
            {/* 이미지 박스 */}
          </div>
          <img className="intro-img" src="/src/img/intro_img.png" alt="intro_img.png" />
        </div>

        {/* 컨텐츠 이미지 박스 */}
        <div className="intro-addition-img-box">
          {/* 이미지 태그 */}
          <img
            className="intro-addition-img1 intro-underimg"
            src="/src/img/green_phone.jpg"
            alt="green_phone.jpg"
          />
          <img
            className="intro-addition-img2 intro-underimg"
            src="/src/img/intro_icestraw.jpg"
            alt="intro_icestraw.jpg"
          />
          <img
            className="intro-addition-img3 intro-underimg"
            src="/src/img/green_zigu.jpg"
            alt="green_zigu.jpg"
          />
        </div>
      </main>
      <Outlet />
<<<<<<< Updated upstream
    </>)
  };

export default Intro;

//<div className="gpt-message-box">
//<p className="gpt-message">소개 페이지입니다.</p>
//<div className="gpt-message-angle"></div>
//</div>
=======
    </>
  );
};

export default Intro;

//   const effectText =
>>>>>>> Stashed changes
