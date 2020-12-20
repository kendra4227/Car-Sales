import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/actions';

const AddedFeature = (props,removeFeature) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature()} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {removeFeature};

export default connect(null, mapDispatchToProps)(AddedFeature);
