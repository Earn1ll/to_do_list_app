
import React,{useState,useEffect} from "react";
//import DB from "./assets/db.json";
import axios from "axios";
import {List,AddList,Tasks} from './components/components';

import listsvg from "./assets/img/Vector.svg";




function App() {


    const [lists, setLists] = useState(
        DB.lists.map(item => {
        item.color = DB.colors.filter(
            color => color.id === item.colorId)[0].name;
        return item;
    }));

    useEffect(() => {
        axios.get('http://localhost:3004/lists?_expand=color').then(({data}) => {

        });
},[]);

    const onAddList =(obj) => {
        const newList = [
            ...lists,
            obj];
        setLists(newList);
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
                    isRemovable
                    onRemove={()=> {
                    alert('Не щелкай!')}
                    }
                />
                <AddList onAdd={onAddList}
                         colors={DB.colors}
                />
            </div>
                <div className= "todo__tasks">
                    <Tasks/>
                </div>
        </div>
    );
}


export default App;
