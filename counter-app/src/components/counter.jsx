import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: this.props.value,
        tags: ['tag1', 'tag2', 'tag3'],
        
    };

    handleCount = (product) => {
        this.setState({count: this.state.count + 1})
        console.log(product);
    }
    
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
        
        console.log(this.props);

        return (
            <React.Fragment>
                {this.props.children}
                <span className="badge badge-warning m-2">{this.formatCount()}</span>
                <button type="button" onClick={() => this.handleCount("hello")} className={classes}>Increment</button>
                <br/><br/>
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