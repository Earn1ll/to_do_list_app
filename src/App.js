import React, {useState, useEffect} from "react";
//import DB from "./assets/db.json";
import axios from "axios";
import {List, AddList, Tasks} from './components/components';

import listsvg from "./assets/img/Vector.svg";


function App() {


    const [lists, setLists] = useState(null);
    const [colors, setColors] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
            .then(({data}) => {
                setLists(data);
            });
        axios.get('http://localhost:3001/colors').then(({data}) => {
            setColors(data);
        });
    }, []);

    const onAddList = (obj) => {
        const newList = [
            ...lists,
            obj];
        setLists(newList);
    };
    const onEditListTitle = (id, title) => {
        const newList = lists.map(item => {
            if (item.id === id) {
                item.name = title;
            }
            return item
        });
    };


    return (
        <div className='todo'>
            <div className='todo__sidebar'>
                <List
                    items={[
                        {
                            icon:
                                <img className="img" src={listsvg} alt="listSvg" / >
                        ,
                        name: 'Все задачи',
                        active:true,
                        }
                        ]}
                        />

                    {lists ? (
                        <List
                        items={lists}
                        onRemove={id => {
                            const newLists = lists.filter(item => item.id !== id);
                            setLists(newLists);
                        }}
                        onClickItem={item => {
                            setActiveItem(item);
                        }}
                        activeItem={activeItem}
                        isRemovable
                        />
                        ) : (
                        'Загрузка...'
                        )}
                        <AddList onAdd={onAddList} colors={colors} />
                        </div>
                        <div className="todo__tasks">
                        {lists && activeItem && (
                        <Tasks
                        list={activeItem}

                        onEditTitle={onEditListTitle}
                        />
                        )}
                        </div>
                        </div>
                        );
                        }


                        export default App;
