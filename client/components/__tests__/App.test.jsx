import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

it('App renders as expected', () => {
  const app = renderer.create(<App />);
  const tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});
