const Title = (props) => {
    return <>
        {/* 각 타이틀 */}
        <div>
            <img src={props.src} alt="" />
            <p>{props.Title}</p>
        </div>
    </>
};
  
export default Title;


//   [].map((v) => {
//     return <Title key={v.id} title={v.title} src={v.src} />
//   })