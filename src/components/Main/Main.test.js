import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Main from "./Main";

describe('Main testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Main />);
    });

    it('should contain Sidebar component', () => {
        expect(wrapper.find('Sidebar')).toHaveLength(1);
    });

    it('should contain Three component', () => {
        expect(wrapper.find('Three')).toHaveLength(1);
    });
});