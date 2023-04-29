import styled from 'styled-components';
import { ButtonVariant, CTAButtonProps } from './types';

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
  flex-direction: row;
  gap: 1rem;
`

export const ButtonContainer = styled.div`
  position: relative;

  > div {
    position: absolute;
    width: fit-content;
    bottom: 35px;
    left: 60px;
    padding: 0 0.25rem;
    background-color: ${p => p.theme.backgroundVariant};
    border-radius: 8px;
    user-select: none;
    color: ${p => p.theme.background};
  }
`;

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