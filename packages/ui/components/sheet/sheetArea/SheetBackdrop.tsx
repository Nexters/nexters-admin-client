import { motion } from 'framer-motion';
import * as React from 'react';

import styles from '../styles';
import { CommonProps } from './types';

const isClickable = (props: any) => !!props.onClick || !!props.onTap;

export type Props = Omit<CommonProps, 'initial' | 'animate' | 'exit'>;

const SheetBackdrop = React.forwardRef<any, Props>(
  ({ style = {}, className = '', ...rest }, ref) => {
    const Component = isClickable(rest) ? motion.button : motion.div;
    const pointerEvents = isClickable(rest) ? 'auto' : 'none';

    return (
      <Component
        {...rest}
        ref={ref}
        className={`react-modal-sheet-backdrop ${className}`}
        style={{ ...styles.backdrop, ...style, pointerEvents }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
      />
    );
  },
);

SheetBackdrop.displayName = 'SheetBackdrop';

export default SheetBackdrop;
