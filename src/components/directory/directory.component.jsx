import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    <div className="mainTextFirst">
      <h1 data-heading="Slide">Live <br/> your </h1>
    </div>
    <div className="mainTextLast">
      <h1 contenteditable data-heading="Lifestyle">Lifestyle</h1>
    </div>
    <div className="points"></div>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
