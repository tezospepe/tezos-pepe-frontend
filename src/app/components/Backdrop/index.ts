import { StyleConstants } from 'src/styles/style-constants';
import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
`;
