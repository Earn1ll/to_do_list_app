import List from "./components/List/index";
import React from "react";
import AddList from "./components/AddListButton/AddList";
import DB from "./assets/db.json";

import listsvg from "./assets/img/Vector.svg";




function App() {
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
                    items={[
                        {
                            color:'green',
                            name: 'Покупки',
                        },
                        {
                            color: 'blue',
                            name: 'Фронтенд',
                        },
                        {
                            color: 'pink',
                            name: 'Фильмы и сериалы',
                        },
                    ]}
                    isRemovoble
                />
                <AddList colors={DB.colors}/>
            </div>
        </div>
    );
}

export default App;
/*

 */