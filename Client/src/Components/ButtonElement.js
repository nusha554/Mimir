import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'var(--green)' : 'var(--black)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? 'var(--black)' : 'var(--white)')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '20px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  justify-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "var(--white)" : "var(--green)")};
  }
`;
