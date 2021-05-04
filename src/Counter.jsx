import { connect } from 'react-redux';
import React from 'react';


const containerStyle = {
    display: 'flex'
}
const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}






class Counter extends React.Component {

    addOne = () => {
        this.props.dispatch({ type: 'ADD_ONE' });
    }
    minusOne = () => {
        this.props.dispatch({ type: 'MINUS_ONE' });
    }


    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <h1>{this.props.number}</h1>
                    <div style={containerStyle}>
                        <button type="button" onClick={this.minusOne} style={buttonStyle}>-</button>
                        <button type="button" onClick={this.addOne} style={buttonStyle}>+</button>
                    </div>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.number
    };
}

export default connect(mapStateToProps)(Counter);
