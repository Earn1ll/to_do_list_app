import React, {useState,useEffect} from "react";
import List from "../List";
import addsvg from "../../assets/img/add.svg";
import "./AddList.scss";
import Badge from "../Badge/Badge";
import axios from 'axios';
import closeSvg from "../../assets/img/close.svg";




const AddList = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [seletedColor, selectColor] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (Array.isArray(colors)) {
            selectColor(colors[0].id);
        }
    }, [colors]);


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
        setIsLoading(true);
        axios
            .post('http://localhost:3001/lists', {
                name: inputValue,
                colorId: seletedColor
            })
            .then(({ data }) => {
                const color = colors.filter(c => c.id === seletedColor)[0].name;
                const listObj = { ...data, color: { name: color } };
                onAdd(listObj);
                onClose();
            })
            .finally(() => {
                setIsLoading(false);
            });
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
                                   className={seletedColor === color.id && 'active'}
                            />
                        ))
                    }
                </div>
                <button onClick={AddList} className="button">{isLoading ? 'Добавление...' : 'Добавить'}</button>
            </div>}
        </div>
    )
}


export default AddList;