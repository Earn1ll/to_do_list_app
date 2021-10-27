import React, {useState} from "react";
import List from "../List";
import addsvg from "../../assets/img/add.svg";
import "./AddList.scss";
import Badge from "../Badge/Badge";

import closeSvg from "../../assets/img/close.svg";

const AddList = ({colors}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);
    return (
        <div className="add_List">
            <List
                onClick={() => setVisiblePopup(true)}
                items={[
                    {
                        className: 'list_add_button',
                        icon: <img className="img" src={addsvg} alt="list icon"/>,
                        name: 'Добавить  список',
                    }
                ]}
            />
            {visiblePopup && <div className="add_list_popup">
                <img
                    onClick={() => setVisiblePopup(false)}
                    src={closeSvg}
                    alt='close button'
                    className="add_list_popup_closeBtn"></img>
                <input className="field" type="text" placeholder="Название списка"/>
                <div className="add_list_popup_colors">

                            {
                                colors.map(color =>(
                                    <Badge onClick={() => selectColor(color.id)}
                                           key={color.id}
                                           color={color.name}
                                           className={selectedColor === color.id && "active"}
                                    />
                                ))
                            }
                </div>
                <button className="button">Добавить</button>
            </div>}
        </div>
    )
}


export default AddList;