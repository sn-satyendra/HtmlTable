import React from 'react';
import { action } from '@storybook/addon-actions';
import GithubUsers from './GithubUsers';

export default {
  component: GithubUsers,
  title: 'GithubUsers'
};

export const defaultView = () => <GithubUsers/>;