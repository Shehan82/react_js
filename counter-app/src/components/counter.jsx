import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
        
    };
    
    render() { 

        let classes = "";
        if(this.state.count === 4)
        {
            classes = "btn btn-primary";
        }
        else
        {
            classes = "btn btn-danger";
        }
        
    
        return (
            <React.Fragment>
                <span className="badge badge-warning m-2">{this.formatCount()}</span>
                <button type="button" className={classes}>Increment</button>
                <ul>
                      {this.state.tags.map(x => <li key={x}>{x}</li>)}
                </ul>
            </React.Fragment> 
            
        );
    }


    formatCount() 
    {
        let {count} = this.state;
        return count;
        
    }
}
 
export default Counter;