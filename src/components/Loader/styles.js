import styled, { keyframes } from "styled-components";

const blink = keyframes`
0% {
    opacity: .2;
}

50% {
    opacity: 1;
}

100% {
    opacity: .2;
}
`;

export const Animation = styled.div`
  text-align: center;

  span {
    color: ${({ theme }) => theme.textSecondary};
    display: inline-block;
    margin: 0 4px 0;
    font-size: 80px;
    line-height: 0.1;
    animation-name: ${blink};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  span:ntn-child(2) {
    animation-delay: 0.2s;
  }

  span:ntn-child(3) {
    animation-delay: 0.4s;
  }
`;
