import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Modal from "./Modal";

describe('Modal testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Modal open={true}/>);
    });

    it('should contain a button to close the modal', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
    });
});