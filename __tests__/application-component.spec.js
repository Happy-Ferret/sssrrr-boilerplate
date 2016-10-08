/*
 * Simple jest rendering test
 */

/*eslint no-undef: 0 */
import React from 'react';
import {Application} from '../components/Application';
import renderer from 'react-test-renderer';

describe('Components rendering test', () => {
  it('should render application component', () => {

    expect(() => {
      const component = renderer.create(<Application children={<div></div>} />);
      const tree = component.toJSON();

      expect(tree).toBeDefined();
    }).not.toThrow();

  });
});
