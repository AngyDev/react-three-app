import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Header from "./Header";

describe('Header testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Header />);
    });

    it('should render the title of the header', () => {
        expect(wrapper.find('h1').text()).toContain("This is the header");

        // const { getByText } = render(<Header />);
        // const linkElement = getByText("This is the header");
        // expect(linkElement).toBeInTheDocument();
    });
});