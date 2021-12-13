import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({onLeaveFeedback,options, }) => (
    <button type="button" onClick={onLeaveFeedback}>{options}</button>
)

FeedbackOptions.prototype = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}

export default FeedbackOptions;