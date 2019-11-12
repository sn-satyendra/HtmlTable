import React from 'react';
import { action } from '@storybook/addon-actions';
import Pagination from './Pagination';

export default {
  component: Pagination,
  title: 'Pagination'
};

export const defaultView = () => <Pagination
  total={100}
  pageNo={5}
  pageSize={10}
  onPageChange={(p)=>{console.log(p);}}
/>;