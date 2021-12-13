import React from "react";
import PropTypes from "prop-types";

const Notification = ({message}) => (
    <h1>{message}</h1>
)

Notification.prototype = {
    message:PropTypes.string,
}

export default Notification;