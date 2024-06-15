import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: "INCREMENT" });
    }

    decrement = () => {
        this.props.dispatch({ type: "DECREMENT" });
    }

    reset = () => {
        this.props.dispatch( { type: 'RESET' } );
    }    

    render() {
        return (
            <div className='border border-primary p-3 m-2'>
                <h2 className='px-1'>Counter</h2>
                <div className='bg-info p-3'>
                    <span className='text-white border p-2 mx-3'>{this.props.count}</span>
                    <button className='mx-2' onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                    <button className='mx-2' onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);