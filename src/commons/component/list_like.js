import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {useState} from "react";

function Like(){
    const [like, setLike]=useState(false);
    const onClick=()=>{
        setLike(!like);
    }

    return(
        <>
            {like?<AiFillHeart color="red" size="25px" onClick={onClick}/>:<AiOutlineHeart color="#989898" size="25px" onClick={onClick}/>}
        </>
    )
    
}

export default Like;