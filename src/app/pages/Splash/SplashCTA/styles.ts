import styled from 'styled-components';
import { ButtonVariant, CTAButtonProps } from './types';

export const CTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

export const CTAHeader = styled.h1`
  color: ${p => p.theme.text};
  font-size: 2.5rem;
  text-align: center;
`;

export const CTADescription = styled.span`
  max-width: 34rem;
  color: ${p => p.theme.textSecondary};
  font-size: 1.25rem;
  text-align: center;
`;

export const CTAClick = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem;
  gap: 1rem;
`
export const CTAButton = styled.button<CTAButtonProps>`
  width: 6rem;
  height: 3rem;
  border: none;
  color: ${p => p.theme.text};
  outline: 
    ${p => p.variant == ButtonVariant.Outline ? `2px solid ${p.theme.text}` : `2px solid ${p.theme.backgroundVariant}`};
  background-color: 
    ${p => p.variant == ButtonVariant.Outline ? 'transparent' : p.theme.backgroundVariant};
`