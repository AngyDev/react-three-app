import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import App from "./App";

describe('App testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />);
    });

    // it('should render the title of the App component', () => {
    //     expect(wrapper.find('#app_title').text()).toContain("Hello World");
    // });

    it('should contain Header component', () => {
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('should contain Sidebar component', () => {
        expect(wrapper.find('Main')).toHaveLength(1);
    });
});