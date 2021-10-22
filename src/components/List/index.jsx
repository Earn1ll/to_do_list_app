import React from "react";

import "./List.scss"


const Index =({items}) => {
    return (
        <ul className="list">
        {
            items.map(item => <li className={item.active ? 'active' :''}>
                    <i >
                        {item.icon}
                    </i>
                <span>{item.name}</span>
                </li>)
        }
        </ul>
    );
};

export default Index