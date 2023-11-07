import { React } from 'react';

const joinMembership = () => {
    return <>
    <main className='membership-mainteg'>
        <article className='membership-outbox'>

            <div className='membership-inbox'>
                {/* 회원가입 로고 박스 */}
                <h1 className='membership-logo-font'>회원가입</h1>
            </div>

            <section className='membership-main'>
                {/* 회원가입 박스 */}
                    <input 
                        className='member-input-textbox' 
                        type="text" 
                        placeholder="아이디"/>
                    <input 
                        className='member-input-textbox' 
                        type="password" 
                        placeholder="비밀번호(8자리 이상 입력)"/>
                    <input 
                        className='member-input-textbox' 
                        type="password" 
                        placeholder="비밀번호(확인)"/>

                    <button className='member-next-btn hover-cursor'>회원가입</button>
            </section>
        </article>
    </main>
    </>
  };
  
  export default joinMembership;