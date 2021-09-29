import FormCalc from "../views/FormCalc";
import {cleanup, getByText, render} from '@testing-library/react'
import sum from "../components/Sum/Sum";
import Number from "../models/Number";
import userEvent from "@testing-library/user-event";

/**
 * test block
 */
describe('Unit tests', () => {

    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
  })),
});
    })

    const paramsValid: Number[][] = [
        [
            {a: 2, name: '2'},
            {a: 2, name: '2'},
            {a: 4, name: 'res: 2 + 2 = '}
        ]
    ];

    /**
     * Parametrized test. There is no need to do testing with other types,
     * because Typescript types fail in compilation time
     */
   test.each(paramsValid)('should return the sum of %p and %p and return %p', (a, b, res) => {
       expect(JSON.stringify(sum(a, b))).toBe(JSON.stringify(res));
    });
    
});

describe('Integration tests', () => {

    /**
     * Clean mounted components 
     */
    afterEach(() => {
        cleanup()
    })

    test('should display result correctly', () => {
        // const p = render(<FormCalc />)
        // const num1 = p.getByRole('num1');
        // const num2 = p.getByRole('num2');
        // expect(num1).toBeInTheDocument()
        // expect(num2).toBeInTheDocument()
        // const button = p.getByRole('submitB');
        // const {container} = render(<FormCalc />)
        // const exponent = container.getElementsByClassName('ant-badge');
        // userEvent.type(num1, '2');
        // userEvent.type(num2, '3');
        // userEvent.click(button);
        // expect(getByText(container, '5')).toBe(true)
        // //expect(getByText).toBeInTheDocument();
    })
    
    
})


export {}