import React from 'react';
import { action } from '@storybook/addon-actions';
import UserCard from './UserCard';

export default {
  component: UserCard,
  title: 'UserCard'
};

export const defaultView = () => <UserCard value="someuser" url="https://github.com/aswani521/cancan"/>;