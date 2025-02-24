import styled from "styled-components";
import { dimensions } from "../../../utilities/dimensions";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h2`
  width: 100%;
  text-align: center;
  letter-spacing: 0.05rem;
  word-spacing: 0.2rem;
  margin-bottom: 5%;
  margin-top: max(3%, 1.875rem);

  @media (min-width: ${dimensions.mediumDevices}) {
    margin-bottom: 2%;
  }
`;
