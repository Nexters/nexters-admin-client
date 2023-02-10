import { DragHandlers, MotionProps, MotionValue } from 'framer-motion';

import { Props as SheetBackdropProps } from './SheetBackdrop';
import { Props as SheetContainerProps } from './SheetContainer';
import { Props as SheetHeaderProps } from './SheetHeader';

export type SheetEvents = {
  onOpen?: VoidFunction;
  onOpened?: VoidFunction;
  onClose?: VoidFunction;
  onClosed?: VoidFunction;
  onXClick?: VoidFunction;
  onNavigate?: VoidFunction;
  onSnap?: (index: number) => void;
};

export type SheetDetent = 'full' | 'half' | 'content';

export type SheetRef = {
  y: MotionValue<number>;
  snapTo: (index: number) => void;
};

export interface CommonProps extends MotionProps {
  className?: string;
}

export interface SheetProps
  extends SheetEvents,
    React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  children: React.ReactNode;
  onXClick?: VoidFunction;
  onNavigate?: VoidFunction;
  rootId?: string;
  mountElement?: Element;
  snapPoints?: number[];
  detent?: SheetDetent;
  disableDrag?: boolean;
  backdropable?: boolean;
}

export interface SheetDragProps {
  drag: 'y';
  dragElastic: number;
  dragConstraints: any;
  dragMomentum: boolean;
  onDrag: DragHandlers['onDrag'];
  onDragEnd: DragHandlers['onDragEnd'];
}

export interface SheetDraggableProps
  extends Omit<
    CommonProps,
    | 'drag'
    | 'dragElastic'
    | 'dragConstraints'
    | 'dragMomentum'
    | 'onDrag'
    | 'onDragStart'
    | 'onDragEnd'
  > {
  disableDrag?: boolean;
  children?: React.ReactNode;
}

type SheetForwardRefExoticComponent<T> = React.ForwardRefExoticComponent<
  T & React.RefAttributes<any>
>;

type HeaderComponent = SheetForwardRefExoticComponent<SheetHeaderProps>;
type ContainerComponent = SheetForwardRefExoticComponent<SheetContainerProps>;
type DraggableComponent = SheetForwardRefExoticComponent<SheetDraggableProps>;
type BackdropComponent = SheetForwardRefExoticComponent<SheetBackdropProps>;
type SheetComponent = SheetForwardRefExoticComponent<SheetProps>;

interface SheetCompoundComponent {
  Container: ContainerComponent;
  Header: HeaderComponent;
  Content: DraggableComponent;
  Backdrop: BackdropComponent;
}

export type SheetCompound = SheetComponent & SheetCompoundComponent;
