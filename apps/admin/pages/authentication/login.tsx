import Link from 'next/link';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Link href="/admin/attendance">출석관리</Link>
      </div>
      <div>
        <Link href="/admin/activity">활동관리</Link>
      </div>
      <div>
        <Link href="/admin/user">회원관리</Link>
      </div>
      <div>
        <Link href="/admin/authentication/login">로그인</Link>
      </div>
      <div>
        <Link href="/admin/authentication/logout">로그아웃</Link>
      </div>
    </div>
  );
}

export default Login;
