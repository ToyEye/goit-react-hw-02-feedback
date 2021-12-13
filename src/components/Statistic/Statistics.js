import React from "react";
import PropTypes from "prop-types";
// import Notification from "../NotificationMessage"

const Statistics = ({ good, neutral, bad, total,positivePercentage }) => (
    <section>
        <p>{good}</p>
        <p>{neutral}</p>
        <p>{bad}</p>
        <p>Total:{total}</p>
          {total < 1 ? (<p>Positive feedback: 0</p>)
          : (<p>Positive feedback: {positivePercentage}%</p>)}
    </section>
)

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}

export default Statistics;