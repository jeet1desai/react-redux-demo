import { BUY_ICECREAM, SELL_ICECREAM } from './iceCreamTypes';

const buyIceCream = () =>{
    return {
        type: BUY_ICECREAM
    }
}

export const sellIceCream = () =>{
    return {
        type: SELL_ICECREAM
    }
}

export default buyIceCream;


