import React, {Component} from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

// const HtmlTableWrapper = styled.table`
// 	border-radius: 8px;
// 	color: #fff;
// 	background: green;
// 	padding: 8px 15px;
// 	border: none;
// 	outline: none;
// `;

class HtmlTable extends Component {

  constructor(props) {
    super(props);
    this.configs = this.createConfigLookup(props);
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

  getPagination = () => {};

  getHeader = () => {
    const {columns} = this.props;
    const cells = columns.map(c => {
      const {header, cellRenderer, sortable, hidden} = c;
      if (!hidden) {
        return <th key={header}>{header}</th>;
      }
    });
    return (
      <thead>
        <tr>
          {cells}
        </tr>
      </thead>
    );
  };

  getBody = () => {
    const {columns, data} = this.props;
    const configs = this.configs;
    const rows = data.map((d, index) => {
      const cells = [];
      Object.keys(d).forEach(key => {
        let cellConfig = configs[key];
        cells.splice(
          cellConfig.index,
          0,
          <td key={`${cellConfig.index}-cell`}>
            {this.renderDataCell(d, key)}
          </td>
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
        <table>
          {this.getHeader()}
          {this.getBody()}
        </table>
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
    field: PropTypes.string.isRequired
  })).isRequired,

  /**
   * Data for the table. Each of the object in the array should have at least the field
   * which is identified by 'id' prop.
   */
  data: PropTypes.array.isRequired,

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
   * Function to be invoked when sorting is done.
   */
  onSort: PropTypes.func,

  /**
   * Function to be invoked when page is changed.
   */
  onPageChage: PropTypes.func,

  /**
   * Theme to be used for the HtmlTable.
   */
  theme: PropTypes.oneOf(['light', 'dark'])
};

HtmlTable.defaultProps = {
  theme: 'light'
};

export default HtmlTable;
