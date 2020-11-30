import styled from "styled-components";

export const Item = styled.li`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 15px;
  padding: 14px 24px;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  lette-spacing: 0.4px;
`;

export const Host = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 12px;
`;

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

export const Description = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const CommentLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  
  &:visited{
    color:  color: ${({ theme }) => theme.textSecondary};
}
`;
