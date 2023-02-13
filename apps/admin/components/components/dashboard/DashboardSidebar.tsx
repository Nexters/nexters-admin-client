import { styled } from '@weekly/ui';

interface DashboardSidebarProps {}

type Props = Partial<DashboardSidebarProps>;

function DashboardSidebar(props: Props) {
  const {} = props;
  return <Wrapper>123</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
  z-index: 999; // FIXME: z-index should be managed by theme
  -webkit-overflow-scrolling: touch;
  position: fixed;
  top: 0;
  outline: 0;
  left: 0;
  background-color: ${({ theme: { palette } }) => palette.grayScale.g100};
  width: 132px;
`;

export { DashboardSidebar };
