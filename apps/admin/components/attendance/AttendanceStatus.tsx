import { styled } from '@weekly/ui';

type TagColor = 'green' | 'yellow' | 'red';

const tagColorMap: Record<TagColor, { background: string; color: string }> = {
  green: { background: '#ecffcb', color: '#1bb847' },
  yellow: { background: '#FFF4CB', color: '#FF7A00' },
  red: { background: '#FDE4E1', color: '#FF5146' },
};
function AttendanceStatus({ status }: { status: string }) {
  switch (status) {
  case '출석':
    return <Tag color={'green'}>출석 완료</Tag>;
  case '지각':
    return <Tag color={'yellow'}>지각</Tag>;
  case '무단결석':
    return <Tag color={'red'}>무단 결석</Tag>;
  case '통보결석':
    return <Tag color={'red'}>통보 결석</Tag>;
  default:
    return <div />;
  }
}
const Tag = styled.div<{ color: TagColor }>`
  display: inline-block;
  ${({ theme }) => theme.typo.body1Bold}
  padding: ${({ theme }) => `${theme.rem(4)} ${theme.rem(12)}`};
  border-radius: 12px;
  background-color: ${({ color }) => tagColorMap[color].background};
  color: ${({ color }) => tagColorMap[color].color};
`;

export default AttendanceStatus;
