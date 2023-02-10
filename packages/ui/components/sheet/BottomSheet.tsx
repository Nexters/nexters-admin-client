import Sheet from './sheetArea';
import type { Props as SheetBackdropProps } from './sheetArea/SheetBackdrop';
import type { Props as SheetContentProps } from './sheetArea/SheetContent';
import type { Props as SheetHeaderProps } from './sheetArea/SheetHeader';
import type { SheetProps } from './sheetArea/types';

export interface BottomSheetProps extends SheetProps {
  headerProps?: SheetHeaderProps;
  contentProps?: SheetContentProps;
  backdropProps?: SheetBackdropProps;
}

/**
 * @param props 바텀시트 props
 * @param props.children  바텀시트 본문 내용
 * @param props.isOpen boolean 바텀시트 열림 여부
 * @param props.snapPoints number[] 바텀시트 스냅 포인트로 사용할 높이 배열
 * @param props.detent SheetDetent 바텀시트 full | half | content 스냅 포인트 enum
 * @param props.rootId string 바텀시트 루트 엘리먼트 id
 * @param props.mountElement Element createPortal 을 사용할 엘리먼트
 * @param props.style React.CSSProperties 바텀시트 스타일
 * @param props.disableDrag boolean 바텀시트 드래그 사용 여부
 * @param props.onOpen VoidFunction 바텀시트 열리는 애니메이션 시작 이벤트
 * @param props.onOpened VoidFunction 바텀시트 열린 이벤트
 * @param props.onClose VoidFunction 바텀시트 닫히는 애니메이션 시작 이벤트
 * @param props.onClosed VoidFunction 바텀시트 닫히는 애니메이션 완료 이벤트
 * @param props.onXClick VoidFunction 바텀시트 내에 닫기 버튼 클릭 이벤트
 * @param props.onNavigate VoidFunction 바텀시트 내에 arrow(<) 버튼 클릭 이벤트
 * @param props.onSnap (index: number) => void 바텀시트 스냅 포인트 변경 이벤트
 * @param props.headerProps SheetHeaderProps 바텀시트 헤더 props
 * @param props.contentProps SheetContentProps 바텀시트 본문 props
 * @param props.backdropProps SheetBackdropProps 바텀시트 배경 props
 * @param props.hasBackdrop 바텀시트 배경 노출 여부
 *
 * @returns React.ReactPortal | React.ReactNode 바텀시트 리액트 포탈 또는 노드
 *
 * @example
 * ```tsx
 * import { BottomSheet } from '@weekly/ui';
 *
 * <BottomSheet isOpen={isOpen} snapPoints={[0, 300, 600]} detent="content">
 *   바텀시트 본문 입니다.
 * </BottomSheet>
 * ```
 */

const BottomSheet = ({
  headerProps,
  contentProps,
  backdropProps,
  backdropable,
  ...props
}: BottomSheetProps) => {
  return (
    <>
      <Sheet {...props}>
        <Sheet.Container>
          <Sheet.Header {...headerProps} />
          <Sheet.Content {...contentProps}>{props.children}</Sheet.Content>
        </Sheet.Container>
        {backdropable ? <Sheet.Backdrop {...backdropProps} /> : <></>}
      </Sheet>
    </>
  );
};

export default BottomSheet;
