import axios from "axios";
import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";

const JoinMembership = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw1, setInputPw1] = useState("");
  const [inputPw2, setInputPw2] = useState("");
  const navigate = useNavigate();
  const inputIdChange = (e) => {
    setInputId(e.target.value.replace(/\W/g, ""));
  };

  const checkId = async () => {
    const result = await axios.get(`/id?id=${inputId}`);
    result.data?.match === true &&
      NotificationManager.error("오류", "이미 있는 아이디입니다.", 3000);
  };

  const checkAccount = async () => {
    const result = await axios.get(`/id?id=${inputId}`);
    if (!result.data?.match && inputPw1 === inputPw2) {
      const result = await axios.post("/create", { id: inputId, pw: inputPw1 });
      console.log(result);
      if (result.data?.result === "success") {
        NotificationManager.success("완료", "회원가입 완료", 3000);
        navigate("/login");
      }
    } else {
      NotificationManager.error(
        "오류",
        "아이디와 비밀번호를 다시 확인해주세요.",
        3000
      );
    }
  };

  const inputPwChange = (type) => {
    return (e) => {
      if (type === 1) {
        setInputPw1(e.target.value.replace(" ", ""));
      } else if (type === 2) {
        setInputPw2(e.target.value.replace(" ", ""));
      }
    };
  };
  const checkSame = () => {
    inputPw1 !== inputPw2 &&
      NotificationManager.error("오류", "비밀번호가 일치하지 않습니다.", 3000);
  };
  return (
    <main className="membership-mainteg">
      <article className="membership-outbox">
        <div className="membership-inbox">
          {/* 회원가입 로고 박스 */}
          <h1 className="membership-logo-font">회원가입</h1>
        </div>

        <section className="membership-main">
          {/* 회원가입 박스 */}
          <input
            className="member-input-textbox"
            type="text"
            placeholder="아이디"
            value={inputId}
            onChange={inputIdChange}
            onBlur={checkId}
          />
          <input
            className="member-input-textbox"
            type="password"
            placeholder="비밀번호(8자리 이상 입력)"
            value={inputPw1}
            onChange={inputPwChange(1)}
            onBlur={checkSame}
          />
          <input
            className="member-input-textbox"
            type="password"
            placeholder="비밀번호(확인)"
            value={inputPw2}
            onChange={inputPwChange(2)}
            onBlur={checkSame}
          />

          <button
            className="member-next-btn hover-cursor"
            onClick={checkAccount}
          >
            회원가입
          </button>
        </section>
      </article>
    </main>
  );
};

export default JoinMembership;
