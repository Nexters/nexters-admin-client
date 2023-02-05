import Link from 'next/link';

function User() {
  return (
    <div>
      <h1>User</h1>
      <Link href="/admin/attendance">출석관리</Link>
      <Link href="/admin/activity">활동관리</Link>
      <Link href="/admin/user">회원관리</Link>
      <Link href="/admin/authentication/login">로그인</Link>
      <Link href="/admin/authentication/logout">로그아웃</Link>
    </div>
  );
}

export default User;
