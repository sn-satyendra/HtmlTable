import React from 'react';
import { action } from '@storybook/addon-actions';
import HtmlTable from './HtmlTable';

export default {
  component: HtmlTable,
  title: 'HtmlTable'
};

export const example1 = () => <HtmlTable
  id="sid"
  columns={[{
    header: "Student Id",
    field: 'sid',
    sortable: true,
    type: 'number'
  }, {
    header: "Name",
    field: 'name',
    sortable: true,
    type: 'string'
  }, {
    header: "Location",
    field: 'location',
    sortable: true
  }, {
    header: "Phone",
    field: 'phone',
    sortable: true,
    type: 'number',
    cellRender: (d) => <div>{d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
  }]}
  data={[
      { sid: 1, name: 'abc', location: 'Pune', phone: 12341 },
      { sid: 2, name: 'pqr', location: 'Delhi', phone: 45231 },
      { sid: 3, name: 'def', location: 'Bengaluru', phone: 423452 },
      { sid: 4, name: 'mno', location: 'Singapore', phone: 642332 },
      { sid: 5, name: 'ljk', location: 'Pune', phone: 245652 },
      { sid: 6, name: 'ort', location: 'Bengaluru', phone: 65352 },
      { sid: 7, name: 'ghk', location: 'Pune', phone: 432141 },
      { sid: 8, name: 'hgk', location: 'Pune', phone: 12341 },
      { sid: 9, name: 'res', location: 'Delhi', phone: 45231 },
      { sid: 10, name: 'vbd', location: 'Bengaluru', phone: 423452 },
      { sid: 11, name: 'sfc', location: 'Singapore', phone: 642332 },
      { sid: 12, name: 'hgf', location: 'Pune', phone: 245652 },
      { sid: 13, name: 'tes', location: 'Bengaluru', phone: 65352 },
      { sid: 14, name: 'gss', location: 'Pune', phone: 432141 },
      { sid: 15, name: 'erg', location: 'Pune', phone: 12341 },
      { sid: 16, name: 'tyy', location: 'Delhi', phone: 45231 },
      { sid: 17, name: 'hhr', location: 'Bengaluru', phone: 423452 },
      { sid: 18, name: 'nnh', location: 'Singapore', phone: 642332 },
      { sid: 19, name: 'rrw', location: 'Pune', phone: 245652 },
      { sid: 20, name: 'aae', location: 'Bengaluru', phone: 65352 },
      { sid: 21, name: 'yyt', location: 'Pune', phone: 432141 }
    ]}
  total={21}
  pageNo={1}
  pageSize={10}
/>;

export const example2 = () => <HtmlTable
  id="sid"
  columns={[{
    header: "Id",
    field: 'id',
    sortable: true,
    type: 'number'
  }, {
    header: "Name",
    field: 'name',
    sortable: true,
    type: 'string'
  }, {
    header: "Start",
    field: 'startDate',
    sortable: true
  }, {
    header: "End",
    field: 'endDate',
    sortable: true,
    type: 'string'
  }, {
    header: "Budget",
    field: 'budget',
    sortable: true,
    type: 'number'
  }]}
  data={[
      {"id":1,"name":"Divavu","startDate":"9/19/2019","endDate":"3/9/2020","budget":88377},
      {"id":2,"name":"Jaxspan","startDate":"11/21/2019","endDate":"2/21/2020", "budget":608715},
      {"id":3,"name":"Miboo","startDate":"11/1/2019","endDate":"6/20/2019","budget":239507},
      {"id":4,"name":"Trilith","startDate":"8/25/2019","endDate":"11/30/2019", "budget":179838},
      {"id":5,"name":"Layo","startDate":"11/28/2019","endDate":"3/10/2020","budget":837850},
      {"id":6,"name":"Photojam","startDate":"7/25/2019","endDate":"6/23/2019", "budget":858131},
      {"id":7,"name":"Blogtag","startDate":"6/27/2019","endDate":"1/15/2020","budget":109078},
      {"id":8,"name":"Rhyzio","startDate":"10/13/2019","endDate":"1/25/2020","budget":272552},
      {"id":9,"name":"Zoomcast","startDate":"9/6/2019","endDate":"11/10/2019", "budget":301919},
      {"id":10,"name":"Realbridge","startDate":"3/5/2020","endDate":"10/2/2019 ","budget":505602}
    ]}
  total={10}
  pageNo={1}
  pageSize={5}
/>;