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

export const Image = styled.img`
  height: 11.8rem;
  width: 100%;
  overflow: hidden;

  @media (min-width: ${dimensions.mediumDevices}) {
    height: 13.7rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardTitle = styled.p`
  text-align: center;
  font-size: var(--fs-200);
  font-weight: var(--fw-regular);
  word-spacing: 0.11em;
  margin: 0.5rem 0.19rem;

  @media (min-width: ${dimensions.mediumDevices}) {
    font-size: var(--fs-200);
    margin: 0.5rem 0.19rem;
  }
`;
