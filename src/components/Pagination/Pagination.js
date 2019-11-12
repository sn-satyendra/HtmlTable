import React, {PureComponent} from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

// const PaginationWrapper = styled.table`
// 	border-radius: 8px;
// 	color: #fff;
// 	background: green;
// 	padding: 8px 15px;
// 	border: none;
// 	outline: none;
// `;

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
    const from = pageNo * pageSize;
    const to = (pageNo * pageSize) + pageSize;
    return (
      <div>
        <button title="First" onClick={this.onFirst}>&lt;&lt;</button>
        <button title="Previous" onClick={this.onPrev}>&lt;</button>
        <button title="Next" onClick={this.onNext}>&gt;</button>
        <button title="Last" onClick={this.onLast}>&gt;&gt;</button>
        <div>
          {from} to {to} of {total}
        </div>
      </div>
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
