import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptionsButton.module.css';

const FeedbackOptionsButton = ({ onLeaveFeedback, options, name }) => (
  <button className={s.button} type="button" onClick={onLeaveFeedback} name={name}>
    {options}
  </button>
);

FeedbackOptionsButton.prototype = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default FeedbackOptionsButton;
