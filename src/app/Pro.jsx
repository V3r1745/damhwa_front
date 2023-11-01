import { React } from 'react';

const Pro = () => {
  const clickValue = (e) => {
    console.log(e.target.innerHTML);
  }
  return <>
    <main className="pro-main">
      <aside className="pro-category-wrap">
        <p className="pro-category-text">카테고리</p>
        <div onClick={clickValue}>주방용품</div>
        <div onClick={clickValue}>생활용품</div>
        <div onClick={clickValue}>욕실용품</div>
        <div onClick={clickValue}>수납/정리용품</div>
        <div onClick={clickValue}>청소용품</div>
        <div onClick={clickValue}>세탁용품</div>
      </aside>
      <article className="pro-content-wrap">
        <div className="pro-content-each">
          <img className="pro-each-img" src="" />
          <p className="pro-each-text">자연 친화적 바디워시 3종 세트 (샤워볼, 바디워시, 때타올)</p>
        </div>
        <div className="pro-content-each">
          <img className="pro-each-img" src="" />
          <p className="pro-each-text">친환경 주방 용품 (주방세제, 주방청소 클리너) 4종세트</p>
        </div>
        <div className="pro-content-each">
          <img className="pro-each-img" src="" />
          <p className="pro-each-text">자연과 함께하는 세탁세제 (700ml)</p>
        </div>
        <div className="pro-content-each">
          <img className="pro-each-img" src="" />
          <p className="pro-each-text">숲속을 걸어요(고체 핸드워시 & 칫솔세트)</p>
        </div>
      </article>
      <div className="pro-list-wrap">
        <i id="left_btn" className="fa-solid fa-chevron-left" />
        <p onClick={clickValue}>1</p>
        <p onClick={clickValue}>2</p>
        <p onClick={clickValue}>3</p>
        <i id="right_btn" className="fa-solid fa-chevron-right" />
      </div>
    </main>
  </>;
};

export default Pro;
