import "../../assets/list_menu.css"

function Lmenu({category, num, filterItem}){
    return(
        <div id="list_menu">
            {
                category.map((category, index)=><button onClick={()=>{let Etype=escape(category);window.location.replace(`/list/?cate=${Etype}`)}}>{category}({num[index]})</button>)
            }
        </div>
    )
}

export default Lmenu;