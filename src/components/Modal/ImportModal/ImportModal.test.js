import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import ImportModal from "./ImportModal";

describe('ImportModal testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ImportModal />);
    });

    it('should contain a button to upload the files', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
    });

    it('should contain an input file type', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });
});