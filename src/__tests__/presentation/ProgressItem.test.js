import React from 'react';
import ProgressItem from '../../components/presentation/ProgressItem';
import renderer from 'react-test-renderer'

it('It should render the ProgressItem correctly', () => {
  const tree = renderer.create(<ProgressItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
