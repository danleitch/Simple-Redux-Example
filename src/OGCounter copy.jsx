import { connect } from 'react-redux';


const containerStyle = {
    display: 'flex'
}
const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}




class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    addOne = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    minusOne = () => {
        this.setState({
            count: this.state.count - 1
        });
    }


    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <h1>{this.state.count}</h1>
                    <div style={containerStyle}>
                        <button type="button" onClick={this.minusOne} style={buttonStyle}>-</button>
                        <button type="button" onClick={this.addOne} style={buttonStyle}>+</button>
                    </div>
                </header>
            </div>
        );
    }
}
export default Counter;