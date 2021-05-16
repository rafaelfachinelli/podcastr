import styled from 'styled-components'

export const Container = styled.div`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;

  background: var(--white);
  border-bottom: 1px solid var(--gray-100);
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 0.25rem 0 0.25rem 2rem;
    margin-left: 2rem;
    border-left: 1px solid var(--gray-100);
  }

  span {
  }
`
export const Hour = styled.span`
  text-transform: capitalize;
`