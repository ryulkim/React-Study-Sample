import '../../assets/list_item.css';

function Litem({items}){
    return(
        <div id="items">
            {
                items.map((item)=>{
                    const {id, title, des, price, type, category, img}=item;
                    return (
                        <div id="item" key={id}>
                            <img src={img} alt={title}/>
                            <div id="des">
                                <span className="item_title">{title}</span>
                                <span className="item_des">{des}</span>
                                <span className="item_price">{price}</span>
                            </div>
                        </div>          
                    )
                })
            }
        </div>
        
    )
}

export default Litem;