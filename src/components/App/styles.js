import styled from "styled-components";

import { tablet, mobile } from "../../styles/mediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px 50px;
  background-color: ${({ theme }) => theme.background};
  ${tablet} {
    padding: 0 40px 50px;
  }
  ${mobile} {
    padding: 0 20px 50px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: 24px;
  margin-bottom: 26px;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;
