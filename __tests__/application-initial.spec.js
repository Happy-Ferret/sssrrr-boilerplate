/*eslint no-undef: 0 */

import middleware from '../server/middleware';
import store from '../shared/store';
import routes from '../shared/routes';


describe('Tests core elements', () => {
  it('expect', () => {
    expect(expect).toBeDefined();
  });

  it('middleware', () => {
    expect(middleware).toBeDefined();
    expect(middleware).not.toThrow();
    expect(middleware()).toThrowError(/original/);
  });

  it('store', () => {
    expect(store).toBeDefined();
    expect(store).not.toThrow();

    const testData = { attribute : 'testing' };
    
    expect(store(testData).getState()).toEqual(testData);
  });

  it('routes', () => {
    expect(() => {
      const element = routes();

      expect(element).toBeDefined();
      expect(element).toBeInstanceOf(Object);

    }).not.toThrow();
  });
});


