import styled from "styled-components";
import { dimensions } from "../../../../../utilities/dimensions";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0.9rem 1.1rem;
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 10px;
  width: 8.1rem;
  height: 16.8rem;
  border: solid 4px var(--color-dark-blue);
  overflow: hidden;

  &:hover {
    border: solid 4px var(--color-purple);
  }

  @media (min-width: ${dimensions.mediumDevices}) {
    width: 9.6rem;
    height: 18.7rem;
  }
`;
