import { TextField } from '@weekly/ui';

function Login() {
  return (
    <div
      style={{
        padding: 32,
        maxWidth: 732,
        height: '100vh',
        background: '#111723',
      }}
    >
      <div style={{ paddingBottom: 16 }}>
        <TextField placeholder="이름을 입력해주세요." />
      </div>
      <div style={{ paddingBottom: 16 }}>
        <TextField value="1234" placeholder="이름을 입력해주세요." />
      </div>
      <div style={{ paddingBottom: 16 }}>
        <TextField
          error="8글자 이하로 입력할 수 있어요."
          value="88888888"
          placeholder="이름을 입력해주세요."
        />
      </div>
    </div>
  );
}

export default Login;
