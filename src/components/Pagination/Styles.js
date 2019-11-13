import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledPagesize = styled.select`
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  color: #000;
  background-color: #f5f5f5;
  border-color: #efefef;
  min-width: 45px;
  margin: 5px;
`;

export const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-image: none;
  color: #000;
  background-color: #f5f5f5;
  border-color: #efefef;
  min-width: 45px;
  margin: 5px;
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledPageIndicator = styled.div`
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  padding: 10px;
  text-align: center;
  span {
    font-weight: bold;
  }
`;