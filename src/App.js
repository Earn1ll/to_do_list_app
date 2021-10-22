import Index from "./components/List/index";
import React from "react";

import listsvg from "./assets/img/Vector.svg";
import ellipseGreen from "./assets/img/EllipseGreen.svg";
import ellipseBlue from  "./assets/img/EllipseBlue.svg";
import ellipsePink from "./assets/img/EllipsePink.svg";


function App() {
    return (
        <div className='todo'>
            <div className='todo__sidebar'>
        <Index
            items={[
                {
                    icon: <img className="img" src={listsvg} alt="list icon"/>,
                    name: 'Все задачи',
                    active:true,
                }
            ]}
        />
                <Index
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
                />
            </div>
        </div>
    );
}

export default App;
/*<img className="img" src={listsvg} alt="list icon"/>,*/