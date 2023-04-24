import { media } from 'src/styles/media';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const LogoTitle = styled.div`
  font-size: 2rem;
  color: ${p => p.theme.text};
  font-weight: bold;

  display: none;
  ${media.small} {
    display: block;
  }
`;

export const LogoDescription = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;

  img {
    width: 60px;
    height: 60px;
    border-radius: 14px;
  }
`;
