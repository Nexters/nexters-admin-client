import { Icon, styled } from '@weekly/ui';

function CameraButton() {
  return (
    <Container>
      <Icon name='camera' />
      <FileInput type='file' accept='image/*' capture='environment' />
    </Container>
  );
}

const Container = styled.label`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  bottom: ${({ theme }) => theme.rem(32)};
  width: ${({ theme }) => theme.rem(40)};
  height: ${({ theme }) => theme.rem(40)};
  border-radius: ${({ theme }) => theme.rem(8)};
  background-color: ${({ theme }) => theme.palette.grayScale.g80};
`;

const FileInput = styled.input`
  display: none;
`;

export { CameraButton };
