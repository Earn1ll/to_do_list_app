import List from "./components/List/index";
import React,{useState} from "react";
import AddList from "./components/AddListButton/AddList";
import DB from "./assets/db.json";

import listsvg from "./assets/img/Vector.svg";




function App() {
    const [lists, setLists] = useState(
        DB.lists.map(item => {
        item.color = DB.colors.filter(
            color => color.id === item.colorId)[0].name;
        return item;
    }));

    const onAddList =(obj) => {
        console.log('добавлен список', obj);
    };


    return (
        <div className='todo'>
            <div className='todo__sidebar'>
        <List
            items={[
                {
                    icon:
                    <img className="img"  src = {listsvg} alt = "listSvg" / >
                    ,
                    name: 'Все задачи',
                    active:true,
                }
            ]}
        />

                <List
                    items={lists}
                    isRemovoble
                />
                <AddList onAdd={onAddList}
                         colors={DB.colors}
                />
            </div>
        </div>
    );
}

export default App;
/*

 */