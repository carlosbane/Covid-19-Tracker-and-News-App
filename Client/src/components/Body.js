import React, { useContext } from 'react';
import { CoronaContext } from '../coronaContext';

const Body = () => {
    const value = useContext(CoronaContext);
    console.log(value);

    return (
        <div>
            <p>Check the console for the data you're looking for :)</p>
        </div>
    )
}


export default Body;