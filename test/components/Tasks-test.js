import React from 'react/addons';
import { expect } from 'chai';
import About from '../../src/components/About';

describe('About', () => {
  const {TestUtils} = React.addons;
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<Tasks />);
  const task = shallowRenderer.getRenderOutput();

  it('should have a div as container', () => {
    expect(task.type).to.equal('div');
  });

  it('should have an h2 tag containing the text "About"', () => {
    expect(task.props.children).to.contain(<h2>Tasks</h2>);
  });

});
