import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters.js';

test('should update the text with passed in values', () => {
  const text = 'hi';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should update the text with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sortByDate', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sortByAmount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});
