import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Button from "./Button";

describe('Button testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Button text="Button" type="button"/>);
    });

    it('should render the button element', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should render the text of the button element', () => {
        expect(wrapper.find('button').text()).toContain("Button");
    });

    it('should render the type of the button element', () => {
        expect(wrapper.find('button').type()).toEqual("button");
    });
});