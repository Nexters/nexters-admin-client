import Link from 'next/link';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Link href='/attendance'>출석관리</Link>
      </div>
      <div>
        <Link href='/activity'>활동관리</Link>
      </div>
      <div>
        <Link href='/user'>회원관리</Link>
      </div>
      <div>
        <Link href='/session'>세션관리</Link>
      </div>
      <div>
        <Link href='/authentication/login'>로그인</Link>
      </div>
      <div>
        <Link href='/authentication/logout'>로그아웃</Link>
      </div>
    </div>
  );
}

export default Login;
