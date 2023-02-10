/* eslint-disable */
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import * as React from 'react';

import { useSheetContext } from '../context';
import styles from '../styles';
import { SheetDraggableProps } from './types';

export interface Props extends SheetDraggableProps {
  navigatable?: boolean;
  closable?: boolean;
  hasGrapple?: boolean;
  titleAlign?: 'left' | 'center';
}
const SheetHeader = React.forwardRef<any, React.PropsWithChildren<Props>>(
  (
    {
      children,
      style,
      disableDrag,
      hasGrapple = true,
      closable = false,
      navigatable = false,
      titleAlign = 'center',
      ...rest
    },
    ref
  ) => {
    const { dragProps, callbacks } = useSheetContext();
    const props = disableDrag ? undefined : dragProps;
    const grappleVisibility = hasGrapple ? 'visible' : 'hidden';

    return (
      <motion.div
        {...rest}
        ref={ref}
        style={{ ...styles.headerWrapper, ...style }}
        {...props}
      >
        <div className="react-modal-sheet-header" style={styles.header}>
          <motion.span
            className="react-modal-sheet-drag-indicator"
            style={{ ...styles.grapple, visibility: grappleVisibility }}
          />
          <Header>{/* HEDAER 에 다른 디펜던시가 많아서 제거 ^^  */}</Header>
        </div>
      </motion.div>
    );
  }
);

SheetHeader.displayName = 'SheetHeader';

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-inline: 12px;
  margin-top: 16px;
  min-height: 52px;
`;

const HeaderContent = styled.div`
  width: calc(100% - 24px);
  padding-inline: 8px;
`;

export default SheetHeader;
