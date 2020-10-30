import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counterComp : [
            {id:1},
            {id:1},
            {id:1},
            {id:1},
        ]
     }
    render() { 
        return ( 
           <div>
              {this.state.counterComp.map(x => <Counter key={x.id}/>)}
           </div>
         );
    }
}
 
export default Counters;