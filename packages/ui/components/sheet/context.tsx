import { AnimationOptions, MotionValue } from 'framer-motion';
import * as React from 'react';

import {
  SheetDetent,
  SheetDragProps,
  SheetEvents,
  SheetProps,
} from './sheetArea/types';

export interface SheetContextType {
  y: MotionValue<any>;
  sheetRef: React.MutableRefObject<any>;
  isOpen: boolean;
  snapPoints: SheetProps['snapPoints'];
  detent: SheetDetent;
  callbacks: React.MutableRefObject<SheetEvents>;
  dragProps?: SheetDragProps;
  windowHeight: number;
  animationOptions: AnimationOptions<number>;
}

export const SheetContext = React.createContext<SheetContextType | undefined>(
  undefined,
);

export const useSheetContext = () => {
  const context = React.useContext(SheetContext);
  if (!context) throw Error('Sheet context error');
  return context;
};
