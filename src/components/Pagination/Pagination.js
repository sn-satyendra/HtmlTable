import React, {PureComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
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
`;

const StyledPageIndicator = styled.div`
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  padding: 10px;
  text-align: center;
  span {
    font-weight: bold;
  }
`;

class Pagination extends PureComponent {
  onPageChange = pageNo => {
    const {pageSize, total, onPageChange} = this.props;
    // Check that pageNo is in valid range as per the pagesize.
    if (pageNo <= total/pageSize && typeof onPageChange === 'function') {
      onPageChange(pageNo);
    }
  };

  onFirst = () => {
    this.onPageChange(1);
  };

  onLast = () => {
    const {pageSize, total} = this.props;
    this.onPageChange(total/pageSize);
  };

  onNext = () => {
    const {pageNo, pageSize, total} = this.props;
    if (pageNo + 1 <= total/pageSize) {
      this.onPageChange(pageNo + 1);
    }
  };

  onPrev = () => {
    const {pageNo} = this.props;
    if (pageNo - 1 >= 0) {
      this.onPageChange(pageNo - 1);
    }
  };

  render() {
    const {pageNo, pageSize, total} = this.props;
    const from = (pageNo <= 1 ? 0 : (pageNo - 1) * pageSize) + 1;
    const to = pageNo * pageSize;
    return (
      <StyledContainer>
        <div>
          <StyledButton title="First" onClick={this.onFirst}>&lt;&lt;</StyledButton>
          <StyledButton title="Previous" onClick={this.onPrev}>&lt;</StyledButton>
          <StyledButton title="Next" onClick={this.onNext}>&gt;</StyledButton>
          <StyledButton title="Last" onClick={this.onLast}>&gt;&gt;</StyledButton>
        </div>
        <StyledPageIndicator>
          <span>{from}</span> to <span>{to}</span> of <span>{total}</span>
        </StyledPageIndicator>
      </StyledContainer>
    );
  }
}

Pagination.propTypes = {
  /**
   * The page which should be rendered initially.
   */
  pageNo: PropTypes.number,

  /**
   * Pagesize of the table.
   */
  pageSize: PropTypes.number,

  /**
   * Total number of records
   */
  total: PropTypes.number,

  /**
   * Function to be invoked when page is changed.
   */
  onPageChange: PropTypes.func,

  /**
   * Theme to be used for the Pagination.
   */
  theme: PropTypes.oneOf(['light', 'dark'])
};

Pagination.defaultProps = {
  theme: 'light'
};

export default Pagination;
