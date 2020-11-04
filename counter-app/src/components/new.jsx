import React, { useState } from 'react';


const CountComp = () => {

    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick = {()=>setCount(count + 1)}>Click me!</button>
        </div>
        
    );

}
 
export default CountComp;