import React from 'react';
import { action } from '@storybook/addon-actions';
import HtmlTable from './HtmlTable';

export default {
  component: HtmlTable,
  title: 'HtmlTable'
};

export const defaultView = () => <HtmlTable
  id="sid"
  columns={[{
    header: "Student Id",
    field: 'sid'
  }, {
    header: "Name",
    field: 'name'
  }, {
    header: "Location",
    field: 'location'
  }, {
    header: "Phone",
    field: 'phone',
    cellRender: (d) => <div>{d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
  }]}
  data={[
      { sid: 1, name: 'abc', location: 'Pune', phone: 12341 },
      { sid: 2, name: 'pqr', location: 'Delhi', phone: 45231 },
      { sid: 3, name: 'def', location: 'Bengaluru', phone: 423452 },
      { sid: 4, name: 'mno', location: 'Singapore', phone: 642332 },
      { sid: 5, name: 'ljk', location: 'Pune', phone: 245652 },
      { sid: 6, name: 'ort', location: 'Bengaluru', phone: 65352 },
      { sid: 7, name: 'ghk', location: 'Pune', phone: 432141 }
    ]}
  total={7}
  pageNo={1}
  pageSize={3}
/>;