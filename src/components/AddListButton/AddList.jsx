import React, {useState}  from "react";
import List from "../List";
import addsvg from "../../assets/img/add.svg";
import  "./AddList.scss";

const  AddList = () => {
const [visiblePopup, setVisiblePopup] = useState(true);
    return (
        <div className="add_List">
            <List
                onClick={() => setVisiblePopup(true)}
                items={[
                    {
                        className:'list_add_button',
                        icon: <img className="img" src={addsvg} alt="list icon"/>,
                        name: 'Добавить  список',
                    }
                ]}
            />
            {visiblePopup && <div className="add_list_popup">
                <input className="field" type="text" placeholder="Название списка"/>
                <button className="button">Добавить</button>
            </div>}
        </div>
    )
}



export default AddList;