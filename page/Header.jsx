import React from 'React';
import { useStore } from '../store';

function Header2() {
    const [/* state */, dispatch] = useStore();
    console.log('header udpate');

    return (
        <>
            <div onClick={() => dispatch({ type: 'decrement' })}>-</div>
            <div onClick={() => dispatch({ type: 'increment' })}>+</div>
        </>
    );
}

export default Header2;