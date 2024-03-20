import { screen } from '@testing-library/react';
import { render } from '../../utils/testUtils';
import Pagination from '../app/Pagination';

test('disable prev button on first page', async () => {
    const paginationProps = {
        page: 1,
        totalPages: 3,
        onPrevClick: () => {},
        onNextClick: () => {},
    };
    render(<Pagination {...paginationProps} />);
    
    expect(screen.getByRole('prev-button')).toBeDisabled()
});

test('disable next button on last page', async () => {
    const paginationProps = {
        page: 3,
        totalPages: 3,
        onPrevClick: () => {},
        onNextClick: () => {},
    };
    render(<Pagination {...paginationProps} />);
    
    expect(screen.getByRole('next-button')).toBeDisabled()
});