import data from '../data/data';
import '../../assets/list_item.css';

function Litem(){
    return(
        <>
            {
                data.map((item)=>{
                    const {id, title, des, price, type, category, img}=item;
                    return (
                        <div id="item" key={id}>
                            <img src={img} alt={title}/>
                            <span>{title}</span>
                            <span>{des}</span>
                            <span>{price}</span>
                        </div>          
                    )
                })
            }
        </>
        
    )
}

export default Litem;