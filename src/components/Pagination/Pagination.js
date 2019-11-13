import React, {PureComponent} from 'react';
import {StyledContainer, StyledPagesize, StyledNav, StyledButton, StyledPageIndicator} from './Styles';
import PropTypes from 'prop-types';

const PAGE_SIZE_RANGE = 10;

class Pagination extends PureComponent {
  onPageChange = pageNo => {
    const {pageSize, total, onPageChange} = this.props;
    // Check that pageNo is in valid range as per the pagesize.
    if (pageNo <= total/pageSize && typeof onPageChange === 'function') {
      onPageChange(pageNo);
    }
  };

  onPageSizeChange = e => {
    const newPageSize = (+e.target.value);
    const {onPageSizeChange, pageSize} = this.props;
    if (pageSize !== newPageSize) {
      onPageSizeChange(newPageSize);
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
    if (pageNo - 1 >= 1) {
      this.onPageChange(pageNo - 1);
    }
  };

  getOptions = () => {
    const {pageNo, pageSize, total} = this.props;
    let options = [];
    let currOption = PAGE_SIZE_RANGE;
    while (currOption <= total) {
      options.push(<option key={currOption} value={currOption}>{currOption}</option>)
      currOption += PAGE_SIZE_RANGE;
    }
    return options;
  };

  render() {
    const {pageNo, pageSize, total} = this.props;
    const from = (pageNo <= 1 ? 0 : (pageNo - 1) * pageSize) + 1;
    const to = pageNo * pageSize;
    return (
      <StyledContainer value={pageSize}>
        <StyledPagesize onChange={this.onPageSizeChange}>
          {this.getOptions()}
        </StyledPagesize>
        <StyledNav>
          <div>
            <StyledButton title="First" onClick={this.onFirst} disabled={from === 1 ? 'disabled' : undefined}>&lt;&lt;</StyledButton>
            <StyledButton title="Previous" onClick={this.onPrev} disabled={from === 1 ? 'disabled' : undefined}>&lt;</StyledButton>
            <StyledButton title="Next" onClick={this.onNext} disabled={to === total ? 'disabled' : undefined}>&gt;</StyledButton>
            <StyledButton title="Last" onClick={this.onLast} disabled={to === total ? 'disabled' : undefined}>&gt;&gt;</StyledButton>
          </div>
          <StyledPageIndicator>
            <span>{from}</span> to <span>{to}</span> of <span>{total}</span>
          </StyledPageIndicator>
        </StyledNav>
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
   * Function to be invoked when pageNo is changed.
   */
  onPageChange: PropTypes.func,

  /**
   * Function to be invoked when pageSize is changed.
   */
  onPageSizeChange: PropTypes.func,

  /**
   * Theme to be used for the Pagination.
   */
  theme: PropTypes.oneOf(['light', 'dark'])
};

Pagination.defaultProps = {
  theme: 'light'
};

export default Pagination;
