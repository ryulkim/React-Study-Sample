import Litem from "./list_item";
import Lmenu from "../component/list_menu";
import data from '../data/data';
import {useState} from "react";
import "../../assets/list.css";

const setCategory=[...new Set(data.map((e)=>e.category))];
const category=["전체",...setCategory];
const numCategory=[data.length,...setCategory.map((cate)=>data.reduce((cnt, data)=>cnt+(data.category===cate),0))];
let selectCategory="전체";

function List(){
    const [items, setItem]=useState(data);

    const filterItem=(cate)=>{
        selectCategory=cate;
        if(selectCategory==="전체"){
            setItem(data);
        }
        else{
            setItem(data.filter(item=>item.category===selectCategory));
        }
    }


    return(
        <div id="list">
            <div className="list">
                <h1 id="title">{selectCategory}</h1>
                <Lmenu category={category} num={numCategory} filterItem={filterItem}/>
                <Litem items={items}/>
            </div>
        </div>
        
        
    )
}

export default List;