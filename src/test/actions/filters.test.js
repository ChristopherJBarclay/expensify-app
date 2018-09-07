import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate 
} from '../../actions/filters.js';

// SET_START_DATE
test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

// SET_END_DATE
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

// SORT_BY_AMOUNT
test('should generate action object sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

// SORT_BY_DATE
test('should generate action object sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

// SET_TEXT_FILTER
test('should generate set text filter object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set text filter object with provided values', () => {
    const textData = 'HelloABC';
    const action = setTextFilter(textData);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'HelloABC'
    });
});