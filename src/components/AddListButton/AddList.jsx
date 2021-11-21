import React, {useState} from "react";
import List from "../List";
import addsvg from "../../assets/img/add.svg";
import "./AddList.scss";
import Badge from "../Badge/Badge";

import closeSvg from "../../assets/img/close.svg";




const AddList = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');
    const onClose = () => {
        setVisiblePopup(false);
        setInputValue('');
        selectColor(colors[0].id);
    }

    const AddList = () => {
        if (!inputValue) {
            alert('Введите название задачи!');
            return;
        }
        const color = colors.filter(c => c.id === selectedColor)[0].name;
        onAdd({id: Math.random(), name: inputValue, color: color});
        onClose();
    }

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
                    onClick={onClose}
                    src={closeSvg}
                    alt='close button'
                    className="add_list_popup_closeBtn"></img>
                <input value={inputValue}
                       className="field"
                       type="text"
                       placeholder="Название списка"
                       onChange={e => setInputValue(e.target.value)}
                />
                <div className="add_list_popup_colors">

                    {
                        colors.map(color => (
                            <Badge onClick={() => selectColor(color.id)}
                                   key={color.id}
                                   color={color.name}
                                   className={selectedColor === color.id && "active"}
                            />
                        ))
                    }
                </div>
                <button onClick={AddList} className="button">Добавить</button>
            </div>}
        </div>
    )
}


export default AddList;