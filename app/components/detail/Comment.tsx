"use Client"
import { RxAvatar } from "react-icons/rx";

import Avatar from "../general/Avatar"
import { products } from "@/utils/Products"
import { Rating } from "@mui/material";




const Comment = ({prd} : {prd : any}) => {
    
  return (


    <div className=" border w-full md:w-1/2 p-2 rounded-lg my-3">


        <div className="flex items-center gap-1"> 
            <RxAvatar size="45px" />
        <div>
            <div> {prd?.user?.name}</div>
            <Rating name="read-only" value={prd.user?.rating} readOnly />
        </div> 
        </div>
       
          
        <div className="text-slate-500">{prd.comment} dsasdas sd asd asd asd asd</div>
    </div>
  )
}

export default Comment