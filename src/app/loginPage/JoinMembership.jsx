import { React } from 'react';

const joinMembership = () => {
    return <>
        <div className='membership-main'>
            {/* 회원가입 박스 */}
            <div className='membership-outbox'>
                {/* 회원가입 로고 박스 */}
                <div className='membership-logobox'>
                    <h1 className='membership-logo-font'>회원가입</h1> 
                </div>
                
                <input className='login-input-textbox' type="text" placeholder="아이디"/>
                <input className='login-input-textbox' type="password" placeholder="비밀번호"/>
                <input className='login-input-textbox' type="password" placeholder="비밀번호(확인)"/>

                <button className='login-next-btn'>회원가입</button>

            </div>
        </div>
    </>
  };
  
  export default joinMembership;