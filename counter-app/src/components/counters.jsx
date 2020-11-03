import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counterComp : [
            {id:1, value:4},
            {id:2, value:3},
            {id:3, value:2},
            {id:4, value:5},
        ]
     }
    render() { 
        return ( 
           <div>
              {this.state.counterComp.map(x => (
                <Counter key={x.id} value={x.value}>
                    <h4>Hello, #{x.id}</h4>
                </Counter>
                ))}

           </div>
         );
    }
}
 
export default Counters;