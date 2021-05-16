import styled from 'styled-components'

export const Container = styled.div`
  width: 26.5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 4rem;

  background: var(--purple-500);
  color: var(--white);

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }
  
`

export const Footer = styled.footer`
  align-self: stretch;

  &.empty .progress {
    opacity: 0.5;
  }
`

export const CurrentEpisode = styled.div`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }

  span {
    display: block;
    margin-top: 1rem;
    line-height: 1.5rem;
    opacity: 0.6;
  }
`

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem;

  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border: 1.5px dashed var(--purple-300);
  border-radius: 1.5rem;
`

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875;

  span {
    width: 4rem;
    display: inline-block;
    text-align: center;
  }
`

export const PlayerSlider = styled.div`
  flex: 1;
`

export const EmptySlider = styled.div`
  width: 100%;
  height: 4px;

  background: var(--purple-300);
  border-radius: 2px;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;
    transition: filter 0.2s;

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }

    &:hover:not(:disabled) {
      filter: brightness(0.75);
    }

    &.isActive {
      filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
    }

    &.isActive:hover {
      filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
        hue-rotate(100deg);
    }
  }
`

export const PlayButton = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--purple-400);
  border-radius: 1rem;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    filter: brightness(0.95);
  }

  &.isActive {
    filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
  }

  &.isActive:hover {
    filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
      hue-rotate(100deg);
  }
`
