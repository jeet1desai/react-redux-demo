import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import buyIceCream, {sellIceCream} from '../redux/iceCream/iceCreamAction';

function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector((state)=>state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num Of IceCream- {numOfIceCreams}</h2>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Cake</button>
            <button onClick={()=>dispatch(sellIceCream())}>Sell Cake</button>
        </div>
    )
}

export default HooksIceCreamContainer
