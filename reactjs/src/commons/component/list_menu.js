import "../../assets/list_menu.css"

function Lmenu({category, num, filterItem}){
    return(
        <div id="list_menu">
            {
                category.map((category, index)=><button onClick={()=>filterItem(category)}>{category}({num[index]})</button>)
            }
        </div>
    )
}

export default Lmenu;