import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid ${(props) => props.theme.primaryBorderColor};
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  tbody tr:nth-child(2n) {
    background: ${(props) => props.theme.primaryBackgroundColor};
  }
`;

export const StyledThead = styled.thead`
  background: ${(props) => props.theme.primaryBackgroundColor};
  color: ${(props) => props.theme.primaryTextColor};
  font-weight: bold;
`;

export const StyledCell = styled.td`
  height: 1.2rem;
  line-height: 1.2rem;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.primaryBorderColor};
  color: ${(props) => props.theme.primaryTextColor};
`;