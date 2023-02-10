/* eslint-disable */
import { DEFAULT_THEME } from '@myrealtrip/web-ui-theme';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  wrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: DEFAULT_THEME.zIndex.bottomSheet,
    overflow: 'hidden',
    pointerEvents: 'none',
  },
  backdrop: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: DEFAULT_THEME.palettes.gray['1000'],
    touchAction: 'none',
    border: 'none',
  },
  container: {
    zIndex: 2,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: DEFAULT_THEME.palettes.white,
    borderTopRightRadius: '40px',
    borderTopLeftRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'auto',
  },
  headerWrapper: {
    width: '100%',
  },
  header: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  grapple: {
    position: 'absolute',
    top: '8px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '56px',
    height: '4px',
    borderRadius: '99px',
    backgroundColor: DEFAULT_THEME.palettes.gray['500'],
    opacity: 0.4,
  },
  content: {
    flex: 1,
    overflow: 'auto',
    position: 'relative',
  },
};

export default styles;
