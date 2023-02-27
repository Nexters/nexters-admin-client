import { css } from '@emotion/react';
import { PropsWithChildren, useRef, useState } from 'react';

import { styled } from '../emotion';

interface DropdownProps extends React.ComponentProps<'div'> {
  size: DropdownSize;
  width: number;
  options: PopupOptions[];
  disabled: boolean;
  onClickOption: () => void;
}
export type PopupOptions = { title: string; onClick: () => void };
type DropdownSize = 'large' | 'small';
type Props = Partial<DropdownProps>;
type WapperProps = Pick<Props, 'size' | 'disabled' | 'width'>;
type DropdownOptionsProps = Pick<
  DropdownProps,
  'size' | 'options' | 'onClickOption' | 'width'
>;

/**
 * @param size 기본값 : small
 * @param placeholder value가 null이면 placeholder가 표시됩니다
 * @param width (size === 'small'일 때) 기본적으로 auto, width 지정하면 fix
 * @param value 외부 state
 * @param setValue 외부 setState
 */
function Popup(props: PropsWithChildren<Props>) {
  const {
    size = 'small',
    disabled = false,
    options = [],
    onClickOption,
    width = 90,
    children,
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const onToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  /* useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]); */

  return (
    <Wrapper
      size={size}
      disabled={disabled}
      onClick={onToggleDropdown}
      ref={ref}
    >
      <>{children}</>
      {isOpen && (
        <DropdownOptions
          size={size}
          options={options}
          onClickOption={onClickOption!}
          width={width}
        />
      )}
    </Wrapper>
  );
}

function DropdownOptions(props: DropdownOptionsProps) {
  const { size, options, onClickOption, width } = props;
  return (
    <DropdownOptionsContainer size={size} width={width}>
      {options.map((option) => (
        <DropdownTable
          key={option.title}
          size={size}
          onClick={() => {
            option.onClick();
            onClickOption && onClickOption();
          }}
        >
          {option.title}
        </DropdownTable>
      ))}
    </DropdownOptionsContainer>
  );
}

const Wrapper = styled.div<WapperProps>`
  position: relative;
`;

const DropdownOptionsContainer = styled.div<{
  size: DropdownSize;
  width: number;
}>`
  position: absolute;
  z-index: 5;
  width: ${({ width }) => width}px;

  ${({ theme, size }) =>
    size === 'large'
      ? css`
          border: 1px solid ${theme.palette.grayScale.g30};
          ${theme.typo.body1Medium}
        `
      : css`
          border: 1px solid ${theme.palette.grayScale.g50};
          ${theme.typo.body2Medium}
        `}

  right: 0;
  margin-top: 4px;

  background-color: ${({ theme }) => theme.palette.grayScale.white};
  border-radius: ${({ theme }) => theme.rem(8)};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const DropdownTable = styled.div<{ size: DropdownSize }>`
  ${({ theme, size }) =>
    size === 'large'
      ? css`
          ${theme.typo.body1Medium}
          padding : ${theme.rem(12)} ${theme.rem(16)};
        `
      : css`
          ${theme.typo.body2Medium}
          padding : ${theme.rem(8)} ${theme.rem(16)};
        `}
  &:hover {
    background-color: ${({ theme }) => theme.palette.grayScale.g20};
  }

  &:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.rem(8)};
    border-top-right-radius: ${({ theme }) => theme.rem(8)};
  }
  &:last-of-type {
    border-bottom-left-radius: ${({ theme }) => theme.rem(8)};
    border-bottom-right-radius: ${({ theme }) => theme.rem(8)};
  }
`;

export { Popup };
