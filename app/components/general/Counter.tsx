import { cardPorductProps } from "../detail/DetailClient";

interface CounterProps {
    cardPorduct : cardPorductProps,
    increaseFunc: () => void;
    decreaseFunc: () => void;
}
const Counter:React.FC<CounterProps> = ({cardPorduct, increaseFunc, decreaseFunc } ) => {
 
    const buttonStyle = "w-8 h-8 border flex items-center justify-center text-lg rounded-md"
 
    return (
    <div className="flex items-center gap-2" >
        <div className={buttonStyle} onClick={decreaseFunc}>-</div>
        <div className="text-lg md:text-xl">{cardPorduct?.quantity}</div>
        <div className={buttonStyle} onClick={increaseFunc}>+</div>

    </div>
  )
}

export default Counter