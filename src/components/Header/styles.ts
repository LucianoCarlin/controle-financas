import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--gray900);
`;

export const Content = styled.div`
  max-width: 1228px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: var(--white);
  background: var(--blue-light);
  border: 0;
  border-radius: 0.5rem;
  height: 3rem;
  padding: 0.5rem;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
