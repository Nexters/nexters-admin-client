import { motion } from 'framer-motion';
import * as React from 'react';

import { useSheetContext } from '../context';
import styles from '../styles';
import { SheetDraggableProps } from './types';

export type Props = SheetDraggableProps;

const SheetContent = React.forwardRef<any, Props>(
  ({ children, style, disableDrag, className = '', ...rest }, ref) => {
    const { dragProps } = useSheetContext();
    const props = disableDrag ? undefined : dragProps;

    return (
      <motion.section
        {...rest}
        ref={ref}
        className={`react-modal-sheet-content ${className}`}
        style={{ ...styles.content, ...style }}
        {...props}
      >
        {children}
      </motion.section>
    );
  },
);

SheetContent.displayName = 'SheetContent';

export default SheetContent;
