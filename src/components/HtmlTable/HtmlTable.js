import React, {Component} from 'react';
import {StyledTable, StyledThead, StyledCell} from './Styles';
import PropTypes from 'prop-types';
import Pagination from '../Pagination/Pagination';

class HtmlTable extends Component {

  constructor(props) {
    super(props);
    this.configs = this.createConfigLookup(props);
    this.state = {
      pageNo: props.pageNo,
      pageSize: props.pageSize,
      data: props.data,
      sortOn: undefined,
      sortDirection: undefined // ASC/DESC
    };
  }

  createConfigLookup = props => {
    const {columns} = this.props;
    let configs = {};
    columns.forEach((c, index) => {
      configs[c.field] = {
        ...c,
        index
      };
    });
    return configs;
  }

  renderDataCell = (rowData, field) => {
    // Lookup the config
    let config = this.configs[field];

    // If a cell renderer is there use it, otherwise return the
    // field value itself.
    if (typeof config.cellRender === 'function') {
      return config.cellRender(rowData[field]);
    } else {
      return rowData[field];
    }
  };

  getPagination = () => {
    const {total} = this.props;
    let {pageNo, pageSize} = this.state;
    return total && pageNo && pageSize && <Pagination
      total={total}
      pageNo={pageNo}
      pageSize={pageSize}
      onPageChange={this.onPageChange}
      onPageSizeChange={this.onPageSizeChange}
    />;
  };

  onPageChange = pageNo => {
    const {onPageChange} = this.props;
    this.setState({
      pageNo
    });
    typeof onPageChange === 'function' && onPageChange({pageNo, pageSize});
  };

  onPageSizeChange = pageSize => {
    this.setState({
      pageSize
    });
  };

  onSort = field => {
    const {onSort} = this.props;
    let {data, sortDirection} = this.state;
    let config = this.configs[field];
    data.sort((a, b) => {
      let comparison = 0;
      let aField = a[field];
      let bField = b[field]
      if (config.type === 'string') {
        aField = aField.toLowerCase();
        bField = bField.toLowerCase();
      }

      if (aField > bField) 
        comparison = 1;
      else if (aField < bField)
        comparison = -1;

      return (sortDirection && sortDirection === 'ASC') ? comparison * -1 : comparison;
    });
    this.setState({
      data,
      sortOn: field,
      sortDirection: sortDirection && sortDirection === 'ASC' ? 'DESC' : 'ASC'
    });
    typeof onSort === 'function' && onSort({sortOn, sortDirection});
  };

  getHeader = () => {
    const {columns} = this.props;
    const {sortOn, sortDirection} = this.state;
    const cells = columns.map(c => {
      const {header, cellRenderer, sortable, hidden, field} = c;
      if (!hidden) {
        return <StyledCell
            key={header} 
            onClick={sortable ? this.onSort.bind(this, field) : undefined}
            style={{
              cursor: sortable ? 'pointer' : 'default'
            }}
          >
          {header}
          &nbsp;
          {sortable && field !== sortOn && <span>&#8597;</span>}
          {sortable && sortDirection === 'ASC' && field === sortOn && <span>&#8595;</span>}
          {sortable && sortDirection === 'DESC' && field === sortOn && <span>&#8593;</span>}
        </StyledCell>;
      }
    });
    return (
      <StyledThead>
        <tr>
          {cells}
        </tr>
      </StyledThead>
    );
  };

  getData = () => {
    let {data, pageNo, pageSize} = this.state;
    if (pageNo && pageSize) {
      // Find paginated data
      let startIndex = pageNo <= 1 ? 0 : (pageNo - 1) * pageSize;
      let endIndex = pageNo * pageSize;
      return data.slice(startIndex, endIndex);
    } else {
      // Return complete data
      return data;
    }
  };

  getBody = () => {
    const {columns} = this.props;
    let data = this.getData();
    const configs = this.configs;
    const rows = data.map((d, index) => {
      const cells = [];
      Object.keys(d).forEach(key => {
        let cellConfig = configs[key];
        cells.splice(
          cellConfig.index,
          0,
          <StyledCell key={`${cellConfig.index}-cell`}>
            {this.renderDataCell(d, key)}
          </StyledCell>
        )
      })
      return <tr key={`${index}-row`}>{cells}</tr>;
    });
    return (
      <tbody>
        {rows}
      </tbody>
    );
  };

  render() {
    return (
      <div>
        <StyledTable>
          {this.getHeader()}
          {this.getBody()}
        </StyledTable>
        {this.getPagination()}
      </div>
    );
  }
}

HtmlTable.propTypes = {
  /**
   * Key of the id field from data. This field's value
   * must be unique with each row.
   */
  id: PropTypes.string,

  /**
   * The column configuration to be used for table.
   */
  columns: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string.isRequired,
    cellRenderer: PropTypes.func,
    sortable: PropTypes.bool,
    hidden: PropTypes.bool,
    field: PropTypes.string.isRequired,
    // TODO: Date support
    type: PropTypes.oneOf(['string', 'number'])
  })).isRequired,

  /**
   * Data for the table. Each of the object in the array should have at least the field
   * which is identified by 'id' prop.
   */
  data: PropTypes.array.isRequired,

  /**
   * The page which should be rendered initially. This starts from 1.
   */
  pageNo: PropTypes.number,

  /**
   * Pagesize of the table.
   */
  pageSize: PropTypes.number,

  /**
   * Total number of records.
   */
  total: PropTypes.number,

  /**
   * Function to be invoked when sorting is done.
   */
  onSort: PropTypes.func,

  /**
   * Function to be invoked when page is changed.
   */
  onPageChange: PropTypes.func
};

export default HtmlTable;
