import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary.js';

test('should correctly render expenses summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={2345321} />);
  expect(wrapper).toMatchSnapshot();
});
