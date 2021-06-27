import React from 'react';

import Sample from '.';
import { mockData_Sample } from './MOCK_DATA';

export default {
  title: 'Pages/Sample',
  component: Sample
};

const Template = (args) => {
  return <Sample {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...mockData_Sample
};
