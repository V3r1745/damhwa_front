// 로그인 페이지(MK)
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";

const Login = (props) => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const changeInputId = (e) => {
    setInputId(e.target.value.replace(/[^a-z0-9A-Z]/g, ""));
  };
  const changeInputPw = (e) => {
    setInputPw(e.target.value.replace(/[^a-z0-9A-Z]/g, ""));
  };
  const [idPass, setIdPass] = useState(false);
  const checkId = async () => {
    const result = await axios.get(`/id?id=${inputId}`);
    if (result.data?.match === true) {
      setIdPass(true);
    } else {
      NotificationManager.error("오류", "아이디를 확인하세요", 5000);
    }
  };
  const checkAccount = async () => {
    const result = await axios.get(`/login?id=${inputId}&pw=${inputPw}`);
    if (result.data?.result === true) {
      navigate(-1);
      NotificationManager.success("로그인!", "로그인 되었습니다!", 3000);
      props.dispatch({type: "login/FETCH_LOGIN", login: true})
    } else {
      NotificationManager.error("오류", "아이디와 비밀번호를 확인하세요", 5000);
    }
  };
  if (!idPass) {
    return (
      <main className="login-mainbox">
        {/* 로그인 박스 */}
        <section className="login-outbox">
          {/* 로그인 로고 박스 */}
          <article className="login-logobox">
            <img className="login-logo-img" src="/src/img/logo/logo.svg" alt="" />
            <h1 className="login-logo-font">로그인</h1>
          </article>
          <div>
            <input
              className="login-input-textbox"
              type="text"
              placeholder="아이디를 입력해주세요"
              value={inputId}
              onChange={changeInputId}
            />
            <button className="login-next-btn hover-cursor" onClick={checkId}>
              다음
            </button>
          </div>
        </section>
        {/* 회원가입 박스 */}
        <Link to="/membership">
          <button className="login-join-membership-btn hover-cursor">
            회원가입
          </button>
        </Link>
        {/* <Link to="/pro">상점</Link> */}
      </main>
    );
  } else {
    return (
      <main className="login-mainbox">
        {/* 로그인 박스 */}
        <section className="login-outbox">
          {/* 로그인 로고 박스 */}
          <article className="login-logobox">
            <img className="login-logo-img" src="/src/img/logo/logo.svg" alt="" />
            <h1 className="login-logo-font">로그인</h1>
          </article>
          <div>
            <input
              className="login-input-textbox"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={inputPw}
              onChange={changeInputPw}
            />
            <button
              className="login-next-btn hover-cursor"
              onClick={checkAccount}
            >
              다음
            </button>
          </div>
        </section>
        {/* 회원가입 박스 */}
        <Link to="/membership">
          <button className="login-join-membership-btn hover-cursor">
            회원가입
          </button>
        </Link>
        {/* <Link to="/pro">상점</Link> */}
      </main>
    );
  }
};

export default connect(state => state)(Login);
