import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Sidebar from "./Sidebar";

describe('Sidebar testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Sidebar />);
    });

    it('should render the title of the header', () => {
        expect(wrapper.find('h1').text()).toContain("Sidebar");
    });
});