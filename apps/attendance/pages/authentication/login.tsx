import { openErrorSnackBar, Snackbar } from '@weekly/ui';

function Login() {
  return (
    <>
      <button
        onClick={() => openErrorSnackBar('유저 정보와 일치하지 않습니다.')}
      >
        asdf
      </button>
      <Snackbar />
    </>
  );
}

export default Login;
