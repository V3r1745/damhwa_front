// 로그인 페이지(MK)
import { React } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return <>
        <div className='login-main'>
            {/* 로그인 박스 */}
            <div className='login-outbox'>
                {/* 로그인 로고 박스 */}
                <div className='login-logobox'>
                    <img className='login-logo-img' src="" alt="" />
                    <h1 className='login-logo-font'>로그인</h1>
                </div>
                
                <input className='login-input-textbox' type="text" placeholder="아이디 또는 연락처를 입력해주세요."/>

                <button className='login-next-btn'>다음</button>

            </div>

            {/* 회원가입 박스 */}
            <Link to="./app/loginPage/JoinMembership.jsx">
            <button className='login-join-membership-btn'>회원가입</button>
            </Link>
            {/* <Link to="/pro">상점</Link> */}

        </div>
    </>
  };
  
  export default Login;