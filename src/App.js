import List from "./components/List/index";
import React from "react";
import AddList from "./components/AddListButton/AddList";
import DB from "./assets/db.json";

import listsvg from "./assets/img/Vector.svg";
import ellipseGreen from "./assets/img/EllipseGreen.svg";
import ellipseBlue from  "./assets/img/EllipseBlue.svg";
import ellipsePink from "./assets/img/EllipsePink.svg";



function App() {
    return (
        <div className='todo'>
            <div className='todo__sidebar'>
        <List
            items={[
                {
                    icon: <img  className="img" src={listsvg} alt="list icon"/>,
                    name: 'Все задачи',
                    active:true,
                }
            ]}
        />

                <List
                    items={[
                        {
                            icon: <img className="img" src={ellipseGreen} alt="list icon"/>,
                            name: 'Покупки',
                        },
                        {
                            icon: <img className="img" src={ellipseBlue} alt="list icon"/>,
                            name: 'Фронтенд',
                        },
                        {
                            icon: <img className="img" src={ellipsePink} alt="list icon"/>,
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
