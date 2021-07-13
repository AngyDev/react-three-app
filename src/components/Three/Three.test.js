import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Three from "./Three";

describe('Three testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Three />);
    });

    // it('should render the title of Three component', () => {
    //     expect(wrapper.find('h1').text()).toContain("3D");
    // });

    it('should render the canvas of Three component', () => {
        expect(wrapper.find('Canvas')).toHaveLength(1);
    });
});