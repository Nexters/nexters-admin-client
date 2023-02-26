import { css } from '@emotion/react';
import { ComponentProps, useRef, useState } from 'react';

import { styled } from '../emotion';

interface DropdownProps extends ComponentProps<'div'> {
  size: DropdownSize;
  width: number;
  options: PopupOptions[];
  disabled: boolean;
  onClickOption: () => void;
  renderElement: JSX.Element;
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
 * @param renderElement 팝업을 열 버튼
 */
function Popup(props: Props) {
  const {
    size = 'small',
    disabled = false,
    options = [],
    onClickOption,
    width = 90,
    renderElement,
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      {renderElement}
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
          top: ${theme.rem(56)};
          border: 1px solid ${theme.palette.grayScale.g30};
          ${theme.typo.body1Medium}
        `
      : css`
          top: ${theme.rem(38)};
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
    border-radius: ${({ theme }) => `${theme.rem(8)} ${theme.rem(8)} 0 0`};
  }
  &:last-of-type {
    border-radius: ${({ theme }) => `0 0 ${theme.rem(8)} ${theme.rem(8)}`};
  }
`;

export { Popup };
