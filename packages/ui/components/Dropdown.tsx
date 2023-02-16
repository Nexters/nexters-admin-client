import { ComponentProps, Dispatch, SetStateAction, useState } from 'react';

import { css, styled } from '../emotion';
import { Icon } from '../icons/Icon';

interface DropdownProps extends ComponentProps<'div'> {
  size: DropdownSize;
  placeholder: string;
  width: number;
  option: string[];
  disabled: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

type DropdownSize = 'large' | 'small';
type Props = Partial<DropdownProps>;
type ContainerProps = Pick<Props, 'size' | 'disabled' | 'width'>;
type DropdownOptionsProps = Pick<DropdownProps, 'size' | 'option' | 'setValue'>;

/**
 * @param size 기본값 : small
 * @param value 선택된 값(string)
 * @param placeholder value가 null이면 placeholder가 표시됩니다
 * @param width (size === 'small'일 때) 기본적으로 auto, width 지정하면 fix
 * @param value 외부 state
 * @param setValue 외부 setState
 */
function Dropdown(props: Props) {
  const {
    size = 'small',
    disabled = false,
    option = [],
    placeholder,
    value,
    setValue,
    width,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container
      size={size}
      disabled={disabled}
      onClick={onToggleDropdown}
      width={width}
    >
      {value ? <p>{value}</p> : <p className='placeholder'>{placeholder}</p>}
      <Icon name='chevron' className='chevron' />
      {isOpen && (
      // TODO : Partial로 props을 받아와 사용하면, 필수여야 하는 prop이면 어떻게 해야할까요..? 일단 non null assertion..으로 하고 올리겠습니다ㅠ

        <DropdownOptions size={size} option={option} setValue={setValue!} />
      )}
    </Container>
  );
}

function DropdownOptions(props: DropdownOptionsProps) {
  const { size, option, setValue } = props;
  return (
    <DropdownOptionsContainer size={size}>
      {option.map((v) => (
        <DropdownTable
          key={v}
          size={size}
          onClick={() => {
            setValue(v);
          }}
        >
          {v}
        </DropdownTable>
      ))}
    </DropdownOptionsContainer>
  );
}

const Container = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background-color: ${({ theme }) => theme.palette.grayScale.g20};
  cursor: pointer;
  position: relative;

  ${({ theme, size, width }) =>
    size === 'large'
      ? css`
          ${theme.typo.body1Medium}
          height: ${theme.rem(56)};
          width: 100%;
          border-radius: ${theme.rem(12)};
          padding: ${theme.rem(15)} ${theme.rem(16)};
          color: ${theme.palette.grayScale.g100};
          .chevron {
            color: ${theme.palette.grayScale.g60};
            width: ${theme.rem(24)};
          }
        `
      : css`
          ${width &&
          css`
            width: ${theme.rem(width)};
          `}
          ${theme.typo.body2Medium}
          height: ${theme.rem(38)};
          border-radius: ${theme.rem(8)};
          border: 1px solid ${theme.palette.grayScale.g50};
          padding: ${theme.rem(8)} ${theme.rem(16)};
          color: ${theme.palette.grayScale.g90};
          .chevron {
            color: ${theme.palette.grayScale.g90};
            width: ${theme.rem(20)};
          }
        `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      cursor: default;
      color: ${theme.palette.grayScale.g50}:;
    `}

    .placeholder {
    color: ${({ theme }) => theme.palette.grayScale.g50};
  }
`;

const DropdownOptionsContainer = styled.div<{ size: DropdownSize }>`
  position: absolute;
  width: 100%;

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
  margin-top: ${({ theme }) => theme.rem(4)};

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

export { Dropdown };
