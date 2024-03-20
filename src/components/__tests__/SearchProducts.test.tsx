import { render } from '../../utils/testUtils';
import SearchProducts from '../app/SearchProducts';
import { fireEvent } from '@testing-library/react'

test('change input value', () => {
    const { getByRole } = render(<SearchProducts />);
    const inputValue = 1;
    const input = getByRole('id-number-input');
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input).toHaveValue(inputValue);
});

test('clear input after button click', () => {
    const { getByRole } = render(<SearchProducts />);
    const inputValue = 1;
    const clearButton = getByRole('clear-button');
    const input = getByRole('id-number-input');
    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.click(clearButton);
    expect(input).toHaveValue(null);
});