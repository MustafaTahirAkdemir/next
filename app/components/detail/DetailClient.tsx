"use client"
import { Rating } from "@mui/material"
import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Counter from "../general/Counter"
import Button from "../general/Button"
import { useEffect, useState } from "react"
import { products } from "@/utils/Products"
import Comment from "./Comment"
import Heading from "../general/Heading"
import UseCart from "@/hooks/useCart"



export type CardPorductProps ={
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
  inStock: boolean
}


const DetailClient = ({product}: {product: any}) => {

  const {productCartQty, addToBasket, cartPrdcts} = UseCart();
  const [displayButton, setDisplayButton ] = useState(false)

    const [cardPorduct, setcardPorduct] = useState <CardPorductProps> ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: 1,
      image: product.image,
      inStock: product.inStock,
    })


    useEffect(() =>{
      setDisplayButton(false)
      let controlDisplay: any = cartPrdcts?.findIndex(cart => cart.id == product.id )
      if(controlDisplay > -1){
        setDisplayButton(true)
      }
    },[cartPrdcts])

    const increaseFunc = () => {
      if(cardPorduct.quantity == 10) return
      setcardPorduct(prev => ({...prev, quantity: prev.quantity + 1}))
    }
    const decreaseFunc = () => {
      if(cardPorduct.quantity == 1) return
      setcardPorduct(prev => ({...prev, quantity: prev.quantity - 1}))
    }

    let productRating = product?.reviwes?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviwes?.length

  return (
    <div className="my-10">
        <PageContainer>
        <div className="block md:flex gap-10 justify-center ">
          <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0">
            <Image src={product.image} fill alt=""/>
          </div>
          <div className="w-full md:w-2/3 space-y-3" >
          <div className="text-xl md:text-2xl">{product?.name}</div>
          <Rating name="read-only" value={productRating} readOnly />
          
          <div className="text-slate-500">{product?.description}</div>
          <div className="flex item-center gap-2">
            <div>STOK DURUMU:</div>
            {
              product.inStock ? <div className="text-green-600"> Ürün Stokta Mevcut</div> : <div className="text-red-600">Ürün Stokta bulunmamaktadır</div>
            }
          </div>
          <div className="text-lg md:text-2xl text-orange-600 font-bold">{product.price} $</div>


          {
              displayButton ? <>
              <Button text="Ürün Sepete Ekli" small outline   onClick={() =>  {}} />
              </>  : <>
              <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardPorduct = {cardPorduct}  />
            <Button text="Sepete Ekle"   onClick={() => addToBasket (cardPorduct)} />

              
              </>
          }
          </div>
          
        </div>
        <Heading text="Yorumlar"/>
        <div>
              {
                product?.reviews?.map((prd : any) => (
                  <Comment key={prd.id} prd={prd} />
                ))
              }
        </div>
      </PageContainer>
    </div>
  )
}

export default DetailClient