import { React } from 'react';

const Elements = () => {
  const clickValue = (e) => {
    console.log(e.target.innerHTML);
  }
  const tempData = {"aside" : ["주방용품", "생활용품", "욕실용품", "수납/정리용품", "청소용품", "세탁용품"], "article" : ["자연 친화적 바디워시 3종 세트 (샤워볼, 바디워시, 때타올)", "친환경 주방 용품 (주방세제, 주방청소 클리너) 4종세트", "자연과 함께하는 세탁세제 (700ml)", "숲속을 걸어요(고체 핸드워시 & 칫솔세트)"], "page" :["1","2","3"]};
  let asideElement = tempData["aside"].map(v => <div key={v} onClick={clickValue}>{v}</div>);
  let articleElement = tempData["article"].map(v => <div key={v} className="pro-content-each">
      <img className="pro-each-img" src="/"/>
      <p className="pro-each-text">{v}</p>
  </div>);
  let pageElement = tempData["page"].map(v => <p key={v} onClick={clickValue}>{v}</p>);
  return [asideElement, articleElement, pageElement];
}

const Pro = () => {
  const Element = (Elements());
  return <>
    <main>
      <aside>
        <p>카테고리</p>
          {Element[0]}
      </aside>
      <section>
        <article>
          {Element[1]}
        </article>
      </section>
      <div className="pro-list-wrap">
        <i id="left_btn" className="fa-solid fa-chevron-left" />
        {Element[2]}
        <i id="right_btn" className="fa-solid fa-chevron-right" />
      </div>
      <div className="sample">1</div>
    </main>
  </>;
};

export default Pro;
