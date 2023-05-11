import styled from 'styled-components';
import { ButtonVariant, CTAButtonProps } from './types';
import { media } from 'src/styles/media';

export const CTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-top: 2rem;
`

export const CTAHeader = styled.h1`
  color: ${p => p.theme.text};
  font-size: 3rem;
  text-align: center;
`;

export const CTADescription = styled.div`
  max-width: 34rem;
  color: ${p => p.theme.textSecondary};
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CTAClick = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.small} {
    flex-direction: row;
  }
`
export const CTAButton = styled.button<CTAButtonProps>`
  width: 6rem;
  height: 3rem;
  border: none;
  border-radius: 14px;
  color: ${p => p.variant == ButtonVariant.Outline ? `${p.theme.text}` : `${p.theme.background}`};
  outline: 
    ${p => p.variant == ButtonVariant.Outline ? `2px solid ${p.theme.text}` : `2px solid ${p.theme.backgroundVariant}`};
  background-color: 
    ${p => p.variant == ButtonVariant.Outline ? 'transparent' : p.theme.backgroundVariant};
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
`

export const CTAProductCard = styled.a`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  background-color: ${p => p.theme.text};
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;
  color: ${p => p.theme.primary};
  text-decoration: none;
  min-height: 150px;

  > span:first-of-type {
    color: ${p => p.theme.background};
    font-size: 1.5rem;
  }

  > div {
    position: absolute;
    font-size: 1.25rem;
    left: 70%;
    color: ${p => p.theme.text};
    background-color: ${p => p.theme.background};
    border-radius: 0.5rem;
    padding: 0 0.5rem;
  }

  :hover {
    box-shadow: 0 0 0 2px ${p => p.theme.backgroundVariant};
  }

  ${media.small} {
    max-width: 300px;
  }
`;