import 'react-toastify/dist/ReactToastify.css';

import styled from '@emotion/styled';
import { toast, ToastContainer } from 'react-toastify';

import { Icon } from '../icons/Icon';
import { palette, rem } from '../theme';
import { lineHeightMap, sizeMap, weightMap } from '../theme/typo';

function Snackbar() {
  return (
    <Container
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

const Container = styled(ToastContainer)`
  .Toastify__toast-icon {
    width: ${rem(24)};
    height: ${rem(24)};
    color: ${palette.grayScale.white};
    margin-right: ${rem(10)};
  }
`;

function openErrorSnackBar(message: string) {
  return toast(message, { icon: <Icon name='error' /> });
}

export { openErrorSnackBar, Snackbar };
