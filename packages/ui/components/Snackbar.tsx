import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';

import { styled } from '../emotion';
import { palette, rem } from '../theme';
import { lineHeightMap, sizeMap, weightMap } from '../theme/typo';

interface SnackbarProps {}

type Props = Partial<SnackbarProps>;

function ErrorIcon() {
  return (
    <IconContainer>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconContainer>
  );
}

function Snackbar(props: Props) {
  return (
    <ToastContainer
      position='top-center'
      closeOnClick
      limit={1}
      autoClose={2000}
      closeButton={false}
      pauseOnHover={false}
      hideProgressBar={true}
      pauseOnFocusLoss={false}
      theme='colored'
      toastStyle={{
        minHeight: 0,
        background: palette.grayScale.g80,
        color: palette.grayScale.white,
        boxShadow: 'none',
        margin: '0 auto',
        top: rem(48),
        height: rem(56),
        width: rem(335),
        padding: rem(18),
        borderRadius: rem(16),
      }}
      bodyStyle={{
        padding: 0,
        margin: 0,
        fontFamily: 'Pretendard',
        fontSize: rem(sizeMap.body2),
        lineHeight: lineHeightMap.body2,
        fontWeight: weightMap.medium,
        letterSpacing: '-0.01em',
      }}
    />
  );
}

const IconContainer = styled.div`
  width: ${({ theme }) => theme.rem(24)};
  height: ${({ theme }) => theme.rem(24)};
  color: ${({ theme }) => theme.palette.grayScale.white};
  margin-right: ${({ theme }) => theme.rem(10)};
`;

function openErrorSnackBar(message: string) {
  return toast(message, { icon: <ErrorIcon /> });
}

export { openErrorSnackBar, Snackbar };
