"use client"

import { CardPorductProps } from "@/app/components/detail/DetailClient"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

interface CartContextProps{
    productCartQty: number
    cartPrdcts: CardPorductProps [] | null
    addToBasket: (product: CardPorductProps) => void 
    addToBasketIncrease: (product: CardPorductProps) => void 
    addToBasketDecrease: (product: CardPorductProps) => void 
    removeFromCart: (product: CardPorductProps) => void 
    removeCart: () => void 
}

const CartContext = createContext<CartContextProps | null> (null)



interface Props{
    [propName: string]: any
}

export const CartContextProvider = (props: Props ) => {
    const [productCartQty, setPorductCardQty ] = useState(0)
    const [cartPrdcts, setCartPrdcts] = useState<CardPorductProps[] | null> (null)

    useEffect(() => {
        let getItem: any = localStorage.getItem('cart')
        let getItemParse: CardPorductProps[] | null = JSON.parse(getItem)
        setCartPrdcts(getItemParse)
    },[])

    const addToBasketIncrease = useCallback((product:CardPorductProps ) => {   

        let updatedCart
        if(product.quantity == 10){
            return toast.error('Daha fazla ekleyemezsin...')
        }
        if(cartPrdcts){
            updatedCart = [...cartPrdcts];
            const existingItem = cartPrdcts.findIndex(item => item.id === product.id)
        
        if(existingItem > -1){
            updatedCart[existingItem].quantity = ++updatedCart[existingItem].quantity
        }
        setCartPrdcts(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
    },[cartPrdcts])

    const addToBasketDecrease = useCallback((product:CardPorductProps ) => {   

        let updatedCart
        if(product.quantity == 1){
            return toast.error('Daha az ekleyemezsin...')
        }
        if(cartPrdcts){
            updatedCart = [...cartPrdcts];
            const existingItem = cartPrdcts.findIndex(item => item.id === product.id)
        
        if(existingItem > -1){
            updatedCart[existingItem].quantity = --updatedCart[existingItem].quantity
        }
        setCartPrdcts(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
    },[cartPrdcts])




    const removeCart = useCallback (() => {
        setCartPrdcts(null)
        toast.success('Sepete Temizlendi...')
        localStorage.setItem('cart', JSON.stringify(null) )


    },[] )


    const addToBasket = useCallback((product:CardPorductProps ) => {   
        setCartPrdcts(prev => {
            let updatedCart;
            if (prev){
                updatedCart = [...prev,product]
            }else{
                updatedCart = [product]
            }   
            toast.success('Ürün Sepete Eklendi...')
            localStorage.setItem('cart', JSON.stringify(updatedCart) )
            return updatedCart
        } )
        
    },[cartPrdcts]) 

    const removeFromCart = useCallback((product:CardPorductProps)=>{

        if(cartPrdcts){
            const filteredProducts = cartPrdcts.filter(cart => cart.id!== product.id)

            setCartPrdcts(filteredProducts)
            toast.success('Ürün Sepetten Silindi...')
            localStorage.setItem('cart', JSON.stringify(filteredProducts) )
        }


    }, [cartPrdcts] )

    let value = {

        productCartQty,
        addToBasket,
        cartPrdcts,
        removeFromCart,
        removeCart,
        addToBasketIncrease,
        addToBasketDecrease
    }

return(
    <CartContext.Provider  value = {value} {...props}/>
)
}

const UseCart = () => {
    const context = useContext(CartContext)



    if(context == null){
        throw new Error('bir hata durumu mevcut')
    }
    return context
}



export default UseCart