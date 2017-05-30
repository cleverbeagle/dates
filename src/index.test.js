import moment from 'moment';
import {
  monthDayYear,
  monthDayYearAtTime,
  timeago,
  add,
  year,
} from './index';

test('it converts a timestamp to Month Day, Year syntax', () => {
  // Note: Test timestamp is in GMT time.
  expect(monthDayYear('2017-05-23T00:00:00Z')).toBe('May 22nd, 2017');
});

test('it converts a timestamp to Month Day, Year syntax with a timezone', () => {
  // Note: Test timestamp is in GMT time.
  expect(monthDayYear('2017-05-23T00:00:00Z', 'Australia/Sydney')).toBe('May 23rd, 2017');
});

test('it converts a timestamp to Month Day, Year at Hours:Minutes Meridiem syntax', () => {
  // Note: Test timestamp is in GMT time. Using "at" here because moment defaults to
  // user's timezone which is unpredictable here.
  const monthDayYearAtTimeString = monthDayYearAtTime('2017-05-23T00:00:00Z');
  expect(monthDayYearAtTimeString.includes('at')).toBe(true);
});

test('it converts a timestamp to Month Day, Year at Hours:Minutes Meridiem syntax with a timezone', () => {
  // Note: Test timestamp is in GMT time.
  expect(monthDayYearAtTime('2017-05-23T00:00:00Z', 'Australia/Sydney')).toBe('May 23rd, 2017 at 10:00 am');
});

test('it converts a timestamp to a timeago string', () => {
  // Note: Test timestamp is in GMT time.
  const timeagoString = timeago('2017-05-23T00:00:00Z');
  expect(timeagoString.includes('ago')).toBe(true);
});

test('it converts a timestamp to a timeago string with a timezone', () => {
  // Note: Test timestamp is in GMT time.
  const timeagoString = timeago(moment().add(3, 'days').format(), 'Australia/Sydney');
  expect(timeagoString.includes('in')).toBe(true);
});

test('it adds days to a timestamp and returns an ISO-8601 string with a timezone', () => {
  // Note: Test timestamp is in GMT time. Only testing with a timezone here because moment defaults
  // to returning string with user's timezone (e.g., -05:00) which is unpredictable here.
  const futureString = add('2017-05-23T00:00:00Z', 3, 'days', 'UTC');
  expect(futureString).toBe('2017-05-26T00:00:00Z');
});

test('it returns the current year as a string', () => {
  // +1900 corrects weird JavaScript .getYear() offset (see: https://www.tutorialspoint.com/javascript/date_getyear.htm)
  expect(year()).toBe(((new Date()).getYear() + 1900).toString());
});
