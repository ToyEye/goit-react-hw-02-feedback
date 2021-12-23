import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptionsButton.module.css';

const FeedbackOptionsButton = ({ onLeaveFeedback, options, name }) => (
  <button className={s.button} type="button" onClick={options} name={name}>
    {onLeaveFeedback}
  </button>
);

FeedbackOptionsButton.prototype = {
  onLeaveFeedback: PropTypes.string.isRequired,
  options: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default FeedbackOptionsButton;
