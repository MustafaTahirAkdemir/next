"use client"

import UseCart from "@/hooks/useCart";
import { MdShoppingBasket } from "react-icons/md";

const CardCaount = () => {
  const {cartPrdcts} = UseCart()
  
  return (
    <div className="hidden md:flex relative">
      <MdShoppingBasket size="25" />
      <div className="absolute bottom-3 left-4 text-xs bg-orange-900 w-5 h-5 flex items-center justify-center rounded-full ">{cartPrdcts?.length}</div>

    </div>
  )
}

export default CardCaount