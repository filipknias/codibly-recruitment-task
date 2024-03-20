import { render } from '../../utils/testUtils';
import Pagination from '../app/Pagination';

test('disable prev button on first page', async () => {
    const paginationProps = {
        page: 1,
        totalPages: 3,
        onPrevClick: () => {},
        onNextClick: () => {},
    };
    const { getByRole } = render(<Pagination {...paginationProps} />);
    
    expect(getByRole('prev-button')).toBeDisabled()
});

test('disable next button on last page', async () => {
    const paginationProps = {
        page: 3,
        totalPages: 3,
        onPrevClick: () => {},
        onNextClick: () => {},
    };
    const { getByRole } = render(<Pagination {...paginationProps} />);
    
    expect(getByRole('next-button')).toBeDisabled()
});