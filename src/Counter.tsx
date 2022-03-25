import { connect, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from './Redux/store';

const containerStyle = {
  display: 'flex',
};
const buttonStyle = {
  fontSize: '1.5rem',
  width: 'auto',
  height: '40px',
};

interface ReduxStateProps {
  number: number;
}

type Props = ReduxStateProps & { dispatch: Dispatch };

const Counter: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const addOne = () => {
    dispatch({ type: 'ADD_ONE' });
  };

  const minusOne = () => {
    props.dispatch({ type: 'MINUS_ONE' });
  };

  const reset = () => {
    props.dispatch({ type: 'RESET' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.number}</h1>
        <div style={containerStyle}>
          <button type="button" onClick={minusOne} style={buttonStyle}>
            -
          </button>
          <button type="button" onClick={addOne} style={buttonStyle}>
            +
          </button>
          <button type="button" onClick={reset} style={buttonStyle}>
            Rest
          </button>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps)(Counter);
