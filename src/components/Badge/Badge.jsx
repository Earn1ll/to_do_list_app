import React from "react";

import "./Badge.scss";

const Badge =({color,onClick,className}) => <i onClick={onClick} className={`badge badge--${color}`}></i>

export default Badge;